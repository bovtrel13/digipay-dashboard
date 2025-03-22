import { useState, useEffect, useRef } from 'react';


const currencies = [
    { code: 'AUD', rate: '9,929.95', icon: '/images/flags/aud.svg' },
    { code: 'BND', rate: '11,230.87', icon: '/images/flags/bnd.png' },
    { code: 'CAD', rate: '11,347.18', icon: '/images/flags/cad.png' },
    { code: 'CHF', rate: '17,145.85', icon: '/images/flags/chf.png' },
    { code: 'CNY', rate: '2,116.14', icon: '/images/flags/cny.png' },
    { code: 'DKK', rate: '2,219.65', icon: '/images/flags/dkk.png' },
    { code: 'EUR', rate: '16,551.97', icon: '/images/flags/eur.png' },
    { code: 'BYN', rate: '7,321.64', icon: '/images/flags/bel.png' },
    { code: 'RUB', rate: '3,486.02', icon: '/images/flags/rus.png' },
];

const CurrencySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);


    const duplicatedCurrencies = [...currencies, ...currencies, ...currencies];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex + 1;

                if (newIndex >= duplicatedCurrencies.length - currencies.length) {
                    setTimeout(() => {
                        if (sliderRef.current) {
                            sliderRef.current.scrollTo({
                                left: 0,
                                behavior: 'auto',
                            });
                        }
                        setCurrentIndex(0);
                    }, 0);
                    return newIndex;
                }

                return newIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [duplicatedCurrencies.length, currencies.length]);

    useEffect(() => {
        if (sliderRef.current) {
            const itemWidth = sliderRef.current.children[0]?.offsetWidth || 0;
            sliderRef.current.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    return (
        <div className="relative w-4/5 max-w-screen-xl mx-auto">

            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-0 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-0 pointer-events-none" />

            <div
                ref={sliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
            >
                {duplicatedCurrencies.map((currency, index) => (
                    <div
                        key={`${currency.code}-${index}`}
                        className="flex items-center space-x-3 px-4 snap-center min-w-[175px]"
                    >
                        <img
                            src={currency.icon}
                            alt={`${currency.code} flag`}
                            className="w-5 h-5 rounded-full"
                        />
                        <span className="text-sm text-gray-400">{currency.code}</span>
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-xs text-gray-400">Kurs money</div>
                            <span className="text-xs text-white">{currency.rate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurrencySlider;