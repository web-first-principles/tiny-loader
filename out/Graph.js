"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
const Utils_1 = require("./Utils");
class Graph {
    constructor() {
        this.graph = {};
    }
    addNode(key, params) {
        if (!Utils_1.hasProperty(this.graph, key)) {
            if (!Utils_1.isObject(params)) {
                throw new Error('Node params should be a proper object');
            }
            this.graph[key] = new Node_1.Node(key, params);
        }
    }
    addEdge(start, end) {
        this.addNode(start, {});
        this.addNode(end, {});
        this.graph[start].addEdge(this.graph[end]);
    }
    getConnections(key) {
        return Utils_1.hasProperty(this.graph, key)
            ? Utils_1.getObjectValues('test')
            : [];
    }
}
exports.Graph = Graph;
