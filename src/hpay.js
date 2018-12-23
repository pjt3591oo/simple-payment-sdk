class HPay {  
    
    constuctor() {
        this.version
        this.m 
        this.key    
    }

    init({m, key}) {
        this.version = "0.1.1"
        this.m  = m
        this.key = key
        console.log("create");
        const fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", './test.css');
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }

    move() {
        console.log("move");
        window.open("http://www.naver.net", "네이버새창", "width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes" ); 
    }

    getVersion() {
        return this.version
    }

    getInfo() {
        console.log(this.m)
        console.log(this.key)
    }
}

export default HPay;  