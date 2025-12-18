// ASYNC / AWAIT EXAMPLE
// Clean and readable async code


async function boardingBus() {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const busArrivesAt10 = Math.random() > 0.5;
                if (busArrivesAt10) {
                    resolve("Board the bus");
                } else {
                    reject("Error: Bus is late.");
                }
            }, 3000);
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


boardingBus();
