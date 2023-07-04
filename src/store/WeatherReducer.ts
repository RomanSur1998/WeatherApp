const defaultState = {
  weather: {},
};

interface Weather {
  type: string;
  payload: any;
}

export interface WeatherState {
  weather: any;
}

export const GET_WEATHER_DATA = "GET_WEATHER_DATA";

export const WeatherReducer = (state = defaultState, action: Weather) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        weather: (state.weather = action.payload),
      };

    default:
      return state;
  }
};
