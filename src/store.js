import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase-auth';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null
    },
    mutations: {

    },
    actions: {
        sginUp({
            commit
        }, autData) {
            firebase.auth.createUserWithEmailAndPassword(
                    autData.email,
                    autData.password)
                .then(response => console.log(response))
                .catch(function (error) {

                    var errorCode = error.code;
                    var errorMessage = error.message;
                });

        },
        login({
            commit
        }, autData) {
            firebase.auth.signInWithEmailAndPassword(
                    autData.email,
                    autData.password)
                .then(response => console.log(response))
                .catch(function (error) {

                    var errorCode = error.code;
                    var errorMessage = error.message;

                });
        }

    },
    getters: {

    }
})
