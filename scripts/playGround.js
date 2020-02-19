'use strict';

function Animmal (name) {
  this.name = name
}

function Cat () {
  Animmal.apply(this, arguments)

  this.hello = () => {
    console.log(this.name)
  }
}

Cat.prototype.constructor = Animmal

// const anim = new Animmal('cat')
const cat = new Cat('SSS')

cat.hello()

// ************************************************

function Graph() {
  this.vertexes = [];
  this.edges = [];
}

console.log(Graph.prototype);

Graph.prototype = {
  addVertex: function(v){
    this.vertexes.push(v);
  }
}

var g = new Graph();

g.addVertex(1)

// **************

const a = {a: 333}
const b = Object.create(a)

_.has(a, 'a')

console.log(b);

const arr = [455, 66, 5]

console.log(Math.min(...arr));
