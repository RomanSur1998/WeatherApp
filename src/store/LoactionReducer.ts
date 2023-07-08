const defultState = {
  location: {},
  city: "Bishkek",
};

export interface LocationState {
  location: any;
  city: string;
}

export const CHANGE_CITY = "CHANGE_CITY";
export const GET_LOACTION = "GET_LOACTION";

interface Loaction {
  type: string;
  payload: any;
}

export const LoactionReducer = (state = defultState, action: Loaction) => {
  switch (action.type) {
    case CHANGE_CITY:
      return { city: (state.city = action.payload) };
    case GET_LOACTION:
      return { location: (state.location = action.payload) };

    default:
      return state;
  }
};

export const getLoacionState = (payload: any) => ({
  type: GET_LOACTION,
  payload: payload,
});
