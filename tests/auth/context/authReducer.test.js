import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/type/types";

describe('Pruebas en authReducer', () => {

    test('debe retornar el estado inicial', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe de (login) llamar al login autenticar y establecer', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Lenora',
                id: '69693'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    })

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const initialState = {
            logged: true,
            user: {
                id: '75',
                name: 'Lelia'
            }
        }

        const action = {
            type: types.logout
        }

        const state = authReducer(initialState, action);

        expect(state).toEqual({ logged: false, user: null });
    })
})