/*
 * JSUtil already has some utility functions, Some more utility functions.
 * Written by diddigiabhi@gmail.com
 * Re-written for Service Now from underscore.js: http://underscorejs.org/
 *
 */


 var JSUtil2 = Class.create();

 //Setting the version. 
 JSUtil2.version = 0.1;
 //Collection functions start here 


//Checks if an object is empty
//String,Arrays,Objects can be passed.
JSUtil2.isEmpty = function(obj){
   if(typeof obj == 'string' || obj == 'array') return obj.length === 0;
   for (var key in obj) if (! JSUtil2.has(obj, key)) return false ;
      return true;
   
};

//Checks if a key belongs to an Object
//JSUtil has a method `contains`, you can either use that or this.
JSUtil2.has = function(obj,key){


   return hasOwnProperty.call(obj, key);
   
};


// One of the important functions,iterates over a given object as 
// per a given iterator.We don't use context much in Service Now, But if
// you want to, pass it as 3rd parameter.
JSUtil2.each = function(obj,iterator,context){

   if(JSUtil.nil(obj)) {gs.log("JSUtil2 Error: Object not defined.");return;}
   if (typeof obj.length == 'number' ) {
      for (var i = 0, l = obj.length; i < l; i++) {

         if (iterator.call(context, obj[i], i, obj) === {}) return;
      }
   } else {
      for (var key in obj) {
         if (JSUtil2.has(obj, key)) {

            if (iterator.call(context, obj[key], key, obj) === {}) return;
         }
      }
   }
};

//produces a new array of values as per the iterator function defined.
JSUtil2.map = function(obj, iterator, context){

   var results = [];
   
   JSUtil2.each(obj, function(value,key,list){      
      results.push( iterator.call(context, value, key, list));   
   });
   
   
   return results;
   
};



// `properties` is an array of key:value pairs.  Find checks if the given Array of objects
// has those properties, and outputs those objects as array of objects.
JSUtil2.find = function(obj,properties){

   //Properties is a JSON Object
   
   if(typeof properties != 'object') { 
      gs.log("JSUtil2 Error: Properties are not Object."); 
      return false;
   }
   
   for(var i in properties){

//First check if the key is present in the object, if yes, then check if has the value that is specified.
if(JSUtil2.has(obj,i) && obj[i] == properties[i]){
         //do nothing
         
         continue;
         
         
      }
      else{
         return false;
      }
      
      
      
   }
   return true;
   
   
};


//Looks through all the values of the object and return those
//which satisfy the iterator defined.
JSUtil2.filter  = function(obj, iterator, context){

   var retArr = [];
   if(JSUtil.nil(obj)) return;
   JSUtil2.each(obj, function(value, index , list){

      if(iterator.call(context, value, index, list)) {
         retArr.push(value);}

      });
   JSUtil.logObject(retArr);
   return retArr;
   
   
};


//Underscore.js's implementation of JSUtil2's find.
JSUtil2.where = function(obj, properties){

   if(JSUtil2.isEmpty(obj)) return [];

   return JSUtil2.filter(obj, function(value) {
      for (var key in properties) {

         if (properties[key] !== value[key]){return false;}
      }
      return true;
   });
   
};


//extracts list of property values.
JSUtil2.pluck = function(obj, key){

   return JSUtil2.map(obj, function(value){   return value[key];   });
   
   
};


// Array functions start here

//Checks if the passed object is an array
JSUtil2.checkArray = function(arr){
   return JSUtil.notNil(arr) && typeof arr == 'object' && typeof (arr.length) == 'number';
};


//If n is specified, it returns first n items in the array.
JSUtil2.first  = function(arr,n){
   if(! JSUtil2.checkArray(arr)) return '-infinity' ;

   if(arr.length == 0) return '-infinity';

   return (n != null)? arr.slice( 0, n) : arr[0];
   
   
};


//return the last item if n is not specified, else retuns n -last characters.
JSUtil2.last = function(arr,n){

   if(! JSUtil2.checkArray(arr)) return '-infinity' ;

   if(arr.length == 0) return '-infinity';

   return (n != null)? arr.slice((arr.length-n), arr.length) : arr[arr.length-1];
   
};

//Removes all the 'falsy' values returned. false,0,null,'', nan and undefined are
//falsy values in Javascript.
JSUtil2.compact = function(arg){


   return JSUtil2.filter(arg, function(value){

      return value;
   } );
   
};

//Filters a given array
JSUtil2.uniq = function(arr){
   var seen = [];
   var i=0;
   while(arr[i]){
      if(seen.length == '0'){
         seen.push(arr[i]);
      }
      else{
         if(JSUtil.contains(seen, arr[i])){ 
			//donothing 
           
		 }
            else{  seen.push(arr[i]);  }
            
         
         
      }
      
      i++;
   }
   return seen;
   
   
   
   
   
};

JSUtil2.validateJSON = function(text){
if (/^[\],:{}\s]*$/
      .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
   .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
   .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      
	  
      return true;
   }
   return false;

}

//Great script taken from Gaidem's blog to handle the paramters from a URL: 
//http://community.servicenow.com/blog/gaidem/great-script-uri-parms

JSUtil2.readFromURL = function(url,param){
   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
   var regexS = "[\\?&]"+name+"=([^&#]*)";  
   var regex = new RegExp( regexS );  
   var results = regex.exec( url_pass ); 
   if( results == null )    return "";  
   else    return results[1];
}












