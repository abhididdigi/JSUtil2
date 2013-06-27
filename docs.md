### JSUtil2 is a port of Underscore.js into Service Now's Server side.
If you don't know what Underscore.js is, Please go ahead and read it all [here](http://underscorejs.org/)

**Introduction:**  Underscore JS is an awesome library for Javascript which will simplify many of Array/List/Collection manipulations. __JSUtil2__ is a port of Underscore.js to Service Now Server side.
For including Underscode.js into the server side, please store it as a UI Script, and call it in any UI Page you need.

This doc will contain the methods that are ported and their usage:

#### A note about the usage of JSUtil2:
All the methods of JSUtil2 can be called without creating an object of JSUtil2.

*Example* : Let's call the method `each` of JSUtil2:

```
var obj = {"Name":"servicenow"};
JSUtil2.each(obj,function(value){return value;})
```







## List of functions:
-----------------------

__Collection Manipulators:__

- [Each](#each)
- Has 
- Is Empty
- Map 
- Find
- Filter
- Where
- Pluck


__Array Manipulators:__

- CheckArray
- First
- Last
- Compact 




****************************************************


### each

Description : `JSUtil2.each` iterates over an object and an iterator in a given context. The signature of the function is given below:

```
JSUtil2.each = function(list,iterator,[context])

```

- list - object that needs to be iterated over.Can be an Array or an Object.
- iterator - the function on which the object needs to be iterated.
- context - Optional - Any context over which the iteration should happen.


*Example:*

```
function logMe(value){
gs.log(value);
}
var arr =  [1,2,3];

JSUtil2.each(arr,logMe);
```
*Output:*
```
Script : *** 1,2,3****


```
--------------------------------------------------------------
### has 
Description : `has` method checks if the object has the given key. You can also use JSUtil's `contains` method.

Signature :

```
JSUtil2.has(obj,key);
```

Obj - The object we are trying to check for key.
Key - The keys to be checked if present.

*Example:*

```
var obj  = {"name":"Abhiram","class":"CSEB","College":"VasaviCollege"};
gs.log(JSUtil2.has(obj,'name'));

```

*Output*

```
*** Script: true
```


















