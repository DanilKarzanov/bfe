class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
    mapKey = []
    mapValue = []
    count = 0
 
    set(node, value) {
        node["data-index"] = this.count++
        this.mapKey.push(node)
        this.mapValue.push(value)
    }
   /**
    * @param {Node} node
    * @return {any}
    */
    get(node) {
        if ("data-index" in node) {
            return this.mapValue[node["data-index"]]

        }

        return
    }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
    has(node) {
        return "data-index" in node
    }
}