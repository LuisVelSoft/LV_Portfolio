import { counterItems } from '../constants/index.js';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding=x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div key={index} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            {item.stacked ? (
              // Render stacked stats inside one tile
              item.stacked.map((sub, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <div className="counter-number text-white text-5xl font-bold mb-2">
                    <CountUp prefix={sub.prefix || ""} suffix={sub.suffix || ""} end={sub.value} />
                  </div>
                  <div className="text-white-50 text-lg">{sub.label}</div>
                </div>
              ))
            ) : (
              <>
                <div className="counter-number text-white text-5xl font-bold mb-2">
                  <CountUp prefix={item.prefix || ""} suffix={item.suffix || ""} end={item.value} />
                </div>
                <div className="text-white-50 text-lg">{item.label}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
