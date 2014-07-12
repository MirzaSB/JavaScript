/*

 Write a program that makes seven calls to console.log to output the following triangle:

 #
 ##
 ###
 ####
 #####
 ######
 #######

 */

var str = "";;

for(var i = 0; i < 7; i++) {
    str = str + "#";
    console.log(str);
}