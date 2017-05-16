"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
/**
 * Base class that represents single Graph node
 */
class Node {
    constructor(key, params) {
        this.identifier = key;
        this.edges = {};
        if (typeof params != 'undefined' && Utils_1.isObject(params)) {
            this.params = params;
        }
    }
    /**
     * Getter for node indentifier
     */
    getId() {
        return this.identifier;
    }
    /**
     * Getter for node connections
     */
    getConnections() {
        return this.edges;
    }
    /**
     * Add connection to another node
     */
    addEdge(node) {
        if (!this.edges[node.getId()]) {
            this.edges[node.getId()] = node;
        }
    }
}
exports.Node = Node;
