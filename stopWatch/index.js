


class Stopwatch{
    constructor()
    { 
        this.timer = null;
        this.startTime = 0;
        this.elepasedTime = 0;
        this.currentTime = 0;
        this.isRunning = false;
        this.stopwatch = document.getElementById("stopwatch");
    }

    start()
    {
        if(!this.isRunning)
        {
            this.startTime= Date.now()-this.elepasedTime;
            this.timer = setInterval(this.update.bind(this), 10);
            this.isRunning = true;
        }
    }

    pause()
    {
        if(this.isRunning)
        {
           
            clearInterval(this.timer);
            this.isRunning = false;
            this.elepasedTime = Date.now() - this.startTime;
        }
    }

    reset()
    {
        if(this.isRunning)
        {
            clearInterval(this.timer);
        }

        this.isRunning = false;
        this.startTime = 0;
        this.elepasedTime = 0;
        this.currentTime = 0;
        this.stopwatch.textContent = "00:00:00:00"
    }

    update()
    {
        this.currentTime = Date.now();
        this.elepasedTime = this.currentTime-this.startTime;
        
        let hours = Math.floor(this.elepasedTime / (1000 * 60 * 60));
        let minutes = Math.floor(this.elepasedTime /(1000*60)%60);
        let seconds = Math.floor(this.elepasedTime / 1000 % 60);
        let milliSeconds = Math.floor(this.elepasedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliSeconds = String(milliSeconds).padStart(2, "0");
        this.stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
    }

};

const stopwatch = new Stopwatch(); 