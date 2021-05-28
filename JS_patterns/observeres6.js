class EventObserver {
    constructor(){
        this.observers = [];
    }
    subscribe(n) {
        this.observers.push(n);
        console.log(`You are now subscribed to ${n.name}`);
    }
    unsubscribe(n) {
        // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list of observers.
        this.observers = this.observers.filter(function(item){
            if(item !== n) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${n.name}`);
    }
    fire() {
        this.observers.forEach(function(item){
            item.call();
        });
    }
    
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});

// Fire
document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

// Click Handler
const getCurMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}