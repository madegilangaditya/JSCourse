class EasyHTTP{
    // Make an HTTP GET Request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        });
    }

    // Make an HTTp POST Request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        });
    }

    // Make an HTTP PUT request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        })
    }

    // Make an HTTP Delete Request
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('data deleted'))
            .then(err => reject(err));
        })
    }
}

