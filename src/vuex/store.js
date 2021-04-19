import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    label_type:"神经网络",
    key_word:"jsk",
    key_token:""
}

const mutations={
    setLabel(state,label){
        state.label_type=label;
    },
    setKey(state,key){
        state.key_word=key;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
