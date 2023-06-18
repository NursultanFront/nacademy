import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { GeolocationControl, Map, ZoomControl, YMaps } from 'react-yandex-maps';
import LocationImage from '../../assets/location.png';

import { Aderss } from '../../pages/TheOrder/TheOrder';

import '../../assets/input.scss';
import './YandexMap.scss';

interface State {
  title: string;
  center: number[];
  zoom: number;
}

type Props = {
  adress: Aderss;
  setAdress: Dispatch<SetStateAction<Aderss>>;
};

const mapOptions = {
  modules: ['geocode', 'SuggestView'],
  defaultOptions: { suppressMapOpenBlock: true },
  width: '100%',
  height: 400,
};

const geolocationOptions = {
  defaultOptions: { maxWidth: 128 },
  defaultData: { content: 'Determine' },
};

const initialState = {
  title: '',
  center: [55.749451, 37.542824],
  zoom: 12,
};

export default function YMapsTest({ adress, setAdress }: Props) {
  const [state, setState] = useState<State>({ ...initialState });
  const [mapConstructor, setMapConstructor] = useState(null);
  const mapRef = useRef(null);
  const searchRef = useRef(null);

  const handleSubmit = () => {
    const currentAdress = state.title.split(',');
    setAdress({
      city: currentAdress[0] ?? '',
      street: currentAdress[1] ?? '',
      home: currentAdress[2] ?? '',
    });
  };

  useEffect(() => {
    if (mapConstructor) {
      // @ts-ignore
      new mapConstructor.SuggestView(searchRef.current).events.add('select', function (e) {
        const selectedName = e.get('item').value;
        // @ts-ignore
        mapConstructor.geocode(selectedName).then((result) => {
          const newCoords = result.geoObjects.get(0).geometry.getCoordinates();
          setState((prevState) => ({ ...prevState, center: newCoords }));
        });
      });
    }
  }, [mapConstructor]);

  // @ts-ignore
  const handleBoundsChange = () => {
    // @ts-ignore
    const newCoords = mapRef.current.getCenter();
    // @ts-ignore
    mapConstructor.geocode(newCoords).then((res) => {
      const nearest = res.geoObjects.get(0);
      const foundAddress = nearest.properties.get('text');
      console.log(foundAddress);
      const [centerX, centerY] = nearest.geometry.getCoordinates();
      const [initialCenterX, initialCenterY] = initialState.center;
      if (centerX !== initialCenterX && centerY !== initialCenterY) {
        setState((prevState) => ({ ...prevState, title: foundAddress }));
      }
    });
  };

  return (
    // <>
    //   <h2>{state.title}</h2>
    //   <input
    //     type="text"
    //     placeholder="Город"
    //     value={adress.city}
    //     onChange={(e) => setAdress({ ...adress, city: e.target.value })}
    //   />

    //   <input
    //     type="text"
    //     placeholder="Улица"
    //     value={adress.street}
    //     onChange={(e) => setAdress({ ...adress, street: e.target.value })}
    //   />

    //   <input
    //     type="text"
    //     placeholder="Номер дома"
    //     value={adress.home}
    //     onChange={(e) => setAdress({ ...adress, home: e.target.value })}
    //   />
    //   <div className="map">
    //     <YMaps query={{ apikey: 'f80bf96b-8fa3-4478-ac9a-39e597b9757a' }}>
    //       <input ref={searchRef} placeholder="Search..." disabled={!mapConstructor} />
    //       <button onClick={handleSubmit} disabled={Boolean(!state.title.length)}>
    //         Подтведить адресс
    //       </button>

    //       <Map
    //         {...mapOptions}
    //         state={state}
    //         // @ts-ignore
    //         onLoad={setMapConstructor}
    //         onBoundsChange={handleBoundsChange}
    //         // @ts-ignore
    //         instanceRef={mapRef}
    //       >
    //         <GeolocationControl {...geolocationOptions} />
    //         <ZoomControl />
    //       </Map>
    //       <img src={LocationImage} className="map__location" alt="Локация" />
    //     </YMaps>
    //   </div>
    // </>
    <>
      <div className="input__wrapper">
        <div className="input__item">
          <label htmlFor="city">Город</label>
          <input
            type="text"
            id="city"
            placeholder="Город"
            value={adress.city}
            onChange={(e) => setAdress({ ...adress, city: e.target.value })}
          />
        </div>

        <div className="input__item">
          <label htmlFor="street">Улица</label>
          <input
            type="text"
            id="street"
            placeholder="Улица"
            value={adress.street}
            onChange={(e) => setAdress({ ...adress, street: e.target.value })}
          />
        </div>

        <div className="input__item">
          <label htmlFor="home">Номер дома</label>
          <input
            type="text"
            id="home"
            placeholder="Номер дома"
            value={adress.home}
            onChange={(e) => setAdress({ ...adress, home: e.target.value })}
          />
        </div>
      </div>

      <div className="center">
        <h2>Ваш адресс: {state.title}</h2>

        <button onClick={handleSubmit} disabled={Boolean(!state.title.length)}>
          Подтвердить адрес
        </button>
      </div>

      <div className="map">
        <YMaps query={{ apikey: 'f80bf96b-8fa3-4478-ac9a-39e597b9757a' }}>
          <div className="map__search">
            <label htmlFor="search">Поиск</label>
            <input
              className="map__input"
              ref={searchRef}
              id="search"
              placeholder="Search..."
              disabled={!mapConstructor}
            />
          </div>

          <Map
            {...mapOptions}
            state={state}
            // @ts-ignore
            onLoad={setMapConstructor}
            onBoundsChange={handleBoundsChange}
            // @ts-ignore
            instanceRef={mapRef}
          >
            <GeolocationControl {...geolocationOptions} />
            <ZoomControl />
          </Map>
          <img src={LocationImage} className="map__location" alt="Локация" />
        </YMaps>
      </div>
    </>
  );
}
