class DataSource {
    static searchFilm(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmIyMWM1MTczZTM0NmU1MjJiMWRiZWZlYjc0Yjk3OSIsInN1YiI6IjVmMmRmN2VjNTU0MWZhMDAzM2M5NzZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ZJZEHb52TVjtN75W7-smdGuniIj0GzEDrMx4E661tc",
                "Content-Type": "application/json;charset=utf-8"
            }
        })
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                    if(responseJson.results.length > 0){
                        return Promise.resolve(responseJson.results);
                    } else {
                        return Promise.reject(`${keyword} tidak ditemukan`)
                    }
                } else {
                    return Promise.reject(`Judul film harus diisi`)
                }
            });
    }
}

export default DataSource;