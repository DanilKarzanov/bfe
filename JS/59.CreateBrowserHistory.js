class BrowserHistory {
    arr = []
    index = -1
    initialized = false
    /**
     * @param {string} url
     * if url is set, it means new tab with url
     * otherwise, it is empty new tab
     */
    constructor(url) {
        if (url !== undefined) {
            this.arr.push(url)
            this.index = 0
            this.initialized = true
        }
    }
    
    /**
     * @param { string } url
     */
    visit(url) {
        this.arr.slice(0, this.index + 1)
        this.arr.push(url)
        this.index = this.arr.length - 1
    }
    
    /**
     * @return {string} current url
     */
    get current() {
        return this.arr[this.index]
    }
    
    // go to previous entry
    goBack() {
        if (this.index === 0 && this.initialized) {
            return
        }
        
        this.index--
    }
    
    // go to next visited url
    forward() {
        if (this.index < this.arr.length - 1) {
            this.index++
        }
    }
}