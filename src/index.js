if ("serviceWorker" in navigator) {
    let sw = await navigator.serviceWorker.register("sw.js").then(registration => {
        console.log(registration);
    }).catch(error => {
        console.error(error);
    });

    async function subscribe() {
        let sw = await navigator.serviceWorker.ready;
        let push = await sw.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BB2VclKxEI2khPyc0DZyhtlvhBYwfGKr-cd-PSk5-0h2xRL6vXNYF8kSXJe5s7L0lR2-YuBpVppGUYz4pEmsTeo'
        })
        console.log(JSON.stringify(push)) // se supone que se deberia volver a la api
    }
}