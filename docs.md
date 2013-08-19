### JSUtil2 is a port of Underscore.js into Service Now's Server side.
If you don't know what Underscore.js is, Please go ahead and read it all [here](http://underscorejs.org/).

**Status** : Tested, ready to be used in Production.


**Introduction:**  Underscore JS is an awesome library for Javascript which will simplify many of Array/List/Collection manipulations. __JSUtil2__ is a port of Underscore.js to Service Now Server side.

You can use JSUtil2 by creating a Script Include by the name JSUtil2 and then, copying the JSUtil2.js.

For including Underscode.js into the client side, please store it as a UI Script, and call it in any UI Page you need.

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
- [Has](#has) 
- [Is Empty](#isempty)
- [Map](http://underscorejs.org/#map) 
- Find :  An alternate implementation of Underscore's `where`
- [Filter](http://underscorejs.org/#filter)
- [Where](http://underscorejs.org/#where)
- [Pluck](http://underscorejs.org/#pluck)


__Array Manipulators:__

- [CheckArray](#checkarray)
- [First](http://underscorejs.org/#first)
- [Last](http://underscorejs.org/#last)
- [Compact](http://underscorejs.org/#compact)

__Other Helpers:__
- [Validate JSON](#validatejson)




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
-----------------------------------------------------------------------------------

### isEmpty:

Description : `isEmpty` checks if a list is empty. For objects you can also use `JSUtil.nil()` to check the emptypness of a list. This also checks for empty string.

Signature:

```
JSUtil2.isEmpty(obj);
```
Obj - Object you want to check for emptyness.

Example: 

```
var obj = {};
new JSUtil2.isEmpty(obj);
```
Output:
```
***Script true

```
-------------------------------------------------------------

### map:

Description : `map` produces a new array of values as per the iterator function defined.

--------------------------------------------------------------------

### checkArray:

Description : checks if the passed object is an Array.

-----------------------------------------------------------------------

### validateJSON:

Description: Checks if the string passed is a valid JSON. Returns false for all invalid JSON strings and other object types(Objects/arrays)

Signature:

```
JSUtil2.validateJSON(text) 

```
text - the value of the JSON string you want to check.

Example:

```
var text = 'abhiram' // not a valid JSON
var flag1 = JSUtil2.validateJSON(text)
text = '{"key":"value"}';
var flag2 = JSUtil2.validateJSON(text);

```
Output:
```
flag1 ==> false
flag2 ==> true
```


------------------------------------------------------------------------



I feel with the above examples, the usage of JSUtil2 is clear. For other methods, and what they do, please refer to Underscore.js's page. I've linked the  respective methods in the index. 

Usage though, will still remain the same as explained above.
















