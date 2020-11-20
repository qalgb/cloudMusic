import {
    reqSingerList
} from '@/api'

export default {
    state: {
        singerList: [],
    },
    mutations: {
        SINGER_SINGERLIST(state, singerList) {
            state.singerList = singerList
        },
    },
    actions: {
        // 获取所有排名
        async getSingerList({
            commit
        }) {
            const result = await reqSingerList()
            if (result.code === 200) {
                commit('SINGER_SINGERLIST', result)
            }
        },

    },
    getters: {

    }
}