/*! emplayeelist 2017-07-27 */
var EmployeeListComponent=function(){};EmployeeListComponent.prototype.render=function(a){var b=this;b.employeeName="THis is name.",b.employeeBio="This is employee Bio.",b.$listContainer=$('<ul class="employeeList"></ul>');for(var c=0,d=10;d>c;c++){var e=$("<li class='name'><img src='img/arrow.png'>"+b.employeeName+(c+1)+"</li>"),f=$("<li class='bio'>"+b.employeeBio+(c+1)+"</li>");b.$listContainer.append(e).append(f)}$("#container").append(b.$listContainer[0]),$("li.name").on("click",function(a){a.stopPropagation(),$(this).next().slideToggle(500).siblings("li.bio").slideUp();var b=$(this).children("img");$("img").not(b).removeClass("rotate"),b.toggleClass("rotate")}),$("li.bio").on("click",function(a){a.stopPropagation(),alert($(this).text())})},$(document).ready(function(){var a,b=new EmployeeListComponent;b.render(a)});