/*
 * JSUtil already has some utility functions, Some more utility functions.
 * Written by diddigiabhi@gmail.com
 *
 */



 

 var JSUtil2 = Class.create();

 /*Collection  functions start here */

/*
 *  has method checks if a key belongs to an Object.
 *
 */

 JSUtil2.isEmpty = function(obj){
   //It doesn't check for nil of an Object. use JSUtil.nil() instead.
   if(typeof obj == 'string' || obj == 'array') return obj.length === 0;
   for (var key in obj) if (! JSUtil2.has(obj, key)) return false ;
      return true;
   
   
   
}

JSUtil2.has = function(obj,key){


   return hasOwnProperty.call(obj, key);
   
};

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


JSUtil2.map = function(obj, iterator, context){

   var results = [];
   
   JSUtil2.each(obj, function(value,key,list){      results.push( iterator.call(context, value, key, list));   });
   
   
   return results;
   
}


JSUtil2.find = function(obj,properties){

   //Properties is a JSON Object
   
   if(typeof properties != 'object') { gs.log("JSUtil2 Error: Properties are not Object."); return false;}
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



JSUtil2.filter  = function(obj, iterator, context){

   var retArr = [];
   if(JSUtil.nil(obj)) return;
   JSUtil2.each(obj, function(value, index , list){

      if(iterator.call(context, value, index, list)) {retArr.push(value);}

      
      
      
   });
   JSUtil.logObject(retArr);
   return retArr;
   
   
};



JSUtil2.where = function(obj, properties){

   if(JSUtil2.isEmpty(obj)) return [];

   return JSUtil2.filter(obj, function(value) {
      for (var key in properties) {

         if (properties[key] !== value[key]){return false;}
      }
      return true;
   });
   
};

JSUtil2.pluck = function(obj, key){

   return JSUtil2.map(obj, function(value){   return value[key];   });
   
   
};


// Array functions start here

JSUtil2.checkArray = function(arr){
   return JSUtil.notNil(arr) && typeof arr == 'object' && typeof (arr.length) == 'number';
};


//If n is specified, it returns first n items in the array
JSUtil2.first  = function(arr,n){
   if(! JSUtil2.checkArray(arr)) return '-infinity' ;

   if(arr.length == 0) return '-infinity';

   return (n != null)? arr.slice( 0, n) : arr[0];
   
   
};

JSUtil2.last = function(arr,n){

   if(! JSUtil2.checkArray(arr)) return '-infinity' ;

   if(arr.length == 0) return '-infinity';

   return (n != null)? arr.slice((arr.length-n), arr.length) : arr[arr.length-1];
   
};

JSUtil2.compact = function(arg){


   return JSUtil2.filter(arg, function(value){

      return value;
   } );
   
};













