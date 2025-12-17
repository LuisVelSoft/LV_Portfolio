#!/bin/bash
set -e

# ===== CONFIGURATION =====
AWS_PROFILE="admin"
AWS_ACCOUNT_ID="378743674489"
AWS_REGION="us-east-1"
IMAGE_NAME="portfolio-app"
APP_RUNNER_SERVICE_ARN="arn:aws:apprunner:us-east-1:378743674489:service/portfolio-app-3/3d98b5460c7f46ee90904f8a23d742e6"
# ========================

ECR_URL="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_NAME}:latest"

echo "=== Building Docker image for amd64 ==="
docker build --platform linux/amd64 -t ${IMAGE_NAME}:latest .

echo "=== Tagging image for ECR ==="
docker tag ${IMAGE_NAME}:latest ${ECR_URL}

echo "=== Logging into ECR ==="
aws --profile ${AWS_PROFILE} ecr get-login-password --region ${AWS_REGION} \
  | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

echo "=== Pushing image to ECR ==="
docker push ${ECR_URL}

echo "=== Triggering App Runner deployment ==="
aws --profile ${AWS_PROFILE} apprunner start-deployment \
  --service-arn ${APP_RUNNER_SERVICE_ARN} \
  --region ${AWS_REGION}

echo "=== Deployment triggered successfully ==="
echo "Image pushed to: ${ECR_URL}"
echo "App Runner service: ${APP_RUNNER_SERVICE_ARN}"
