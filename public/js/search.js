/*!
  * Simple-Jekyll-Search v1.4.1 (https://github.com/christian-fei/Simple-Jekyll-Search)
  * Copyright 2015-2017, Christian Fei
  * Licensed under MIT (https://github.com/christian-fei/Simple-Jekyll-Search/blob/master/LICENSE.md)
  */
(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(c,d,b){function a(n,m){var k=m.length;var f=n.length;if(f>k){return false}if(f===k){return n===m}outer:for(var h=0,g=0;h<f;h++){var l=n.charCodeAt(h);while(g<k){if(m.charCodeAt(g++)===l){continue outer}}return false}return true}d.exports=a},{}],2:[function(b,d,a){d.exports={load:f};function f(h,j){var i=g();i.open("GET",h,true);i.onreadystatechange=c(i,j);i.send()}function c(h,i){return function(){if(h.readyState===4&&h.status===200){try{i(null,JSON.parse(h.responseText))}catch(j){i(j,null)}}}}function g(){return(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP")}},{}],3:[function(b,c,a){c.exports=function d(h){if(!f(h)){throw new Error("-- OptionsValidator: required options missing")}if(!(this instanceof d)){return new d(h)}var g=h.required;this.getRequiredOptions=function(){return g};this.validate=function(i){var j=[];g.forEach(function(k){if(typeof i[k]==="undefined"){j.push(k)}});return j};function f(i){if(!i){return false}return typeof i.required!=="undefined"&&i.required instanceof Array}}},{}],4:[function(h,c,t){c.exports={put:g,clear:o,get:r,search:i,setOptions:q};var p=h("./SearchStrategies/FuzzySearchStrategy");var l=h("./SearchStrategies/LiteralSearchStrategy");var s=[];var b={};b.fuzzy=false;b.limit=10;b.searchStrategy=b.fuzzy?p:l;function g(u){if(j(u)){return m(u)}if(k(u)){return f(u)}return undefined}function o(){s.length=0;return s}function r(){return s}function j(u){return !!u&&Object.prototype.toString.call(u)==="[object Object]"}function k(u){return !!u&&Object.prototype.toString.call(u)==="[object Array]"}function m(u){s.push(u);return s}function f(w){var v=[];for(var u=0;u<w.length;u++){if(j(w[u])){v.push(m(w[u]))}}return v}function i(u){if(!u){return[]}return n(s,u,b.searchStrategy,b)}function q(u){b=u||{};b.fuzzy=u.fuzzy||false;b.limit=u.limit||10;b.searchStrategy=u.fuzzy?p:l}function n(z,u,A,x){var y=[];for(var w=0;w<z.length&&y.length<x.limit;w++){var v=a(z[w],u,A,x);if(v){y.push(v)}}return y}function a(x,u,y,w){for(var v in x){if(!d(x[v],w.exclude)&&y.matches(x[v],u)){return x}}}function d(y,v){var w=false;v=v||[];for(var x=0;x<v.length;x++){var u=v[x];if(!w&&new RegExp(y).test(u)){w=true}}return w}},{"./SearchStrategies/FuzzySearchStrategy":5,"./SearchStrategies/LiteralSearchStrategy":6}],5:[function(c,d,b){var a=c("fuzzysearch");d.exports=new f();function f(){this.matches=function(h,g){return a(g,h)}}},{fuzzysearch:1}],6:[function(b,c,a){c.exports=new d();function d(){this.matches=function(g,f){if(typeof g!=="string"){return false}g=g.trim();return g.toLowerCase().indexOf(f.toLowerCase())>=0}}},{}],7:[function(d,f,a){f.exports={compile:g,setOptions:b};var c={};c.pattern=/\{(.*?)\}/g;c.template="";c.middleware=function(){};function b(h){c.pattern=h.pattern||c.pattern;c.template=h.template||c.template;if(typeof h.middleware==="function"){c.middleware=h.middleware}}function g(h){return c.template.replace(c.pattern,function(i,k){var j=c.middleware(k,h[k],c.template);if(typeof j!=="undefined"){return j}return h[k]||i})}},{}],8:[function(b,c,a){
/*!
  * Simple-Jekyll-Search v1.4.1 (https://github.com/christian-fei/Simple-Jekyll-Search)
  * Copyright 2015-2017, Christian Fei
  * Licensed under MIT (https://github.com/christian-fei/Simple-Jekyll-Search/blob/master/LICENSE.md)
  */
<<<<<<< HEAD
(function(j,n){var g={searchInput:null,resultsContainer:null,json:[],searchResultTemplate:'<li><a href="{url}">{title}</a></li><br><p>{description}</p>',templateMiddleware:function(){},noResultsText:"No results found",limit:10,fuzzy:false,exclude:[]};var m=["searchInput","resultsContainer","json"];var f=b("./Templater");var t=b("./Repository");var w=b("./JSONLoader");var k=b("./OptionsValidator")({required:m});var v=b("./utils");j.SimpleJekyllSearch=function q(y){var z=k.validate(y);if(z.length>0){u("You must specify the following required options: "+m)}g=v.merge(g,y);f.setOptions({template:g.searchResultTemplate,middleware:g.templateMiddleware});t.setOptions({fuzzy:g.fuzzy,limit:g.limit});if(v.isJSON(g.json)){o(g.json)}else{h(g.json)}return{search:l}};j.SimpleJekyllSearch.init=j.SimpleJekyllSearch;if(typeof j.SimpleJekyllSearchInit==="function"){j.SimpleJekyllSearchInit.call(this,j.SimpleJekyllSearch)}function o(y){t.put(y);i()}function h(y){w.load(y,function(A,z){if(A){u("failed to get JSON ("+y+")")}o(z)})}function r(){g.resultsContainer.innerHTML=""}function d(y){g.resultsContainer.innerHTML+=y}function i(){g.searchInput.addEventListener("keyup",function(A){var y=A.which;if(p(y)){r();var z=A.target.value;l(z)}})}function l(y){if(s(y)){x(t.search(y))}}function x(A){var y=A.length;if(y===0){return d(g.noResultsText)}for(var z=0;z<y;z++){d(f.compile(A[z]))}}function s(y){return y&&y.length>0}function p(y){return[13,16,20,37,38,39,40,91].indexOf(y)===-1}function u(y){throw new Error("SimpleJekyllSearch --- "+y)}})(window,document)},{"./JSONLoader":2,"./OptionsValidator":3,"./Repository":4,"./Templater":7,"./utils":9}],9:[function(c,d,b){d.exports={merge:f,isJSON:a};function f(i,h){var j={};for(var g in i){j[g]=i[g];if(typeof h[g]!=="undefined"){j[g]=h[g]}}return j}function a(g){try{if(g instanceof Object&&JSON.parse(JSON.stringify(g))){return true}return false}catch(h){return false}}},{}]},{},[8]);
=======

;(function (window, document) {
  'use strict'

  var options = {
    searchInput: null,
    resultsContainer: null,
    json: [],
    searchResultTemplate: '<h3><a href="{url}">{title}</a></h3><time>{date}</time><p>{description}</p>',
    templateMiddleware: function () {},
    noResultsText: 'No se han encontrado resultados',
    limit: 10,
    fuzzy: false,
    exclude: []
  }

  var requiredOptions = ['searchInput', 'resultsContainer', 'json']

  var templater = require('./Templater')
  var repository = require('./Repository')
  var jsonLoader = require('./JSONLoader')
  var optionsValidator = require('./OptionsValidator')({
    required: requiredOptions
  })
  var utils = require('./utils')

  /*
    Public API
  */
  window.SimpleJekyllSearch = function SimpleJekyllSearch (_options) {
    var errors = optionsValidator.validate(_options)
    if (errors.length > 0) {
      throwError('You must specify the following required options: ' + requiredOptions)
    }

    options = utils.merge(options, _options)

    templater.setOptions({
      template: options.searchResultTemplate,
      middleware: options.templateMiddleware
    })

    repository.setOptions({
      fuzzy: options.fuzzy,
      limit: options.limit
    })

    if (utils.isJSON(options.json)) {
      initWithJSON(options.json)
    } else {
      initWithURL(options.json)
    }

    return {
      search: search
    }
  }

  // for backwards compatibility
  window.SimpleJekyllSearch.init = window.SimpleJekyllSearch

  if (typeof window.SimpleJekyllSearchInit === 'function') {
    window.SimpleJekyllSearchInit.call(this, window.SimpleJekyllSearch)
  }

  function initWithJSON (json) {
    repository.put(json)
    registerInput()
  }

  function initWithURL (url) {
    jsonLoader.load(url, function (err, json) {
      if (err) {
        throwError('failed to get JSON (' + url + ')')
      }
      initWithJSON(json)
    })
  }

  function emptyResultsContainer () {
    options.resultsContainer.innerHTML = ''
  }

  function appendToResultsContainer (text) {
    options.resultsContainer.innerHTML += text
  }

  function registerInput () {
    options.searchInput.addEventListener('keyup', function (e) {
      var key = e.which
      if (isWhitelistedKey(key)) {
        emptyResultsContainer()
        var query = e.target.value
        search(query)
      }
    })
  }

  function search (query) {
    if (isValidQuery(query)) {
      render(repository.search(query))
    }
  }

  function render (results) {
    var len = results.length
    if (len === 0) {
      return appendToResultsContainer(options.noResultsText)
    }
    for (var i = 0; i < len; i++) {
      appendToResultsContainer(templater.compile(results[i]))
    }
  }

  function isValidQuery (query) {
    return query && query.length > 0
  }

  function isWhitelistedKey (key) {
    return [13, 16, 20, 37, 38, 39, 40, 91].indexOf(key) === -1
  }

  function throwError (message) { throw new Error('SimpleJekyllSearch --- ' + message) }
})(window, document)

},{"./JSONLoader":2,"./OptionsValidator":3,"./Repository":4,"./Templater":7,"./utils":9}],9:[function(require,module,exports){
'use strict'
module.exports = {
  merge: merge,
  isJSON: isJSON
}

function merge (defaultParams, mergeParams) {
  var mergedOptions = {}
  for (var option in defaultParams) {
    mergedOptions[option] = defaultParams[option]
    if (typeof mergeParams[option] !== 'undefined') {
      mergedOptions[option] = mergeParams[option]
    }
  }
  return mergedOptions
}

function isJSON (json) {
  try {
    if (json instanceof Object && JSON.parse(JSON.stringify(json))) {
      return true
    }
    return false
  } catch (e) {
    return false
  }
}

},{}]},{},[8]);
>>>>>>> dev
