document.getElementById("btn1").addEventListener("click",function()
    {
        document.getElementById("content").style.display="block";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn2").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="block";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn3").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="block";
    })
    
          var list1=[];
          var list2=[];
          var list3=[];
          var list4=[];
          var list5=[];
          var list6=[];
          var list7=[];
          var list8=[];
          var list9=[];
          var list10=[];
          
          var n=1;
          var x=0;
          
          const validateForm = (ev) =>{
               ev.preventDefault();
               var nam=document.myform.name.value;
               var email2=document.myform.email.value;
               var mobnum=document.myform.mnum.value;
               var age2=document.myform.age.value;
               var gen2=document.myform.gender.value;
               var dan2=document.myform.type.value;
               var nom2=document.myform.nom.value;
               var dtype2=document.myform.dtype.value;
               var comment2=document.myform.comment.value;
               var agree2=document.myform.agree.checked;
               var NameRegex= /^[a-zA-Z ]{3,30}$/;
               var EmailRegex= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z\.]+)\.([a-zA-Z]{2,5})$/;
               var MobileRegex = /^(\+91)?[7-9]{1}[0-9]{9}$/;
               var AgeRegex= /^[1-4][0-9]$/;
               var NomRegex= /^[1-9]$/;
               var CommentRegex= /^[a-zA-Z0-9\.\ ]{0,220}$/;
               if (NameRegex.test(nam)==false)
               {
                  document.getElementById("nam1").innerHTML="Name should be 3 to 30 charcters";
               }
               else
               {
                document.getElementById("nam1").innerHTML="";
                if(EmailRegex.test(email2)==false)
                {
                  document.getElementById("emal").innerHTML="Enter a valid Email";
                }
                else
                {
                  document.getElementById("emal").innerHTML="";  
                  if(MobileRegex.test(mobnum)==false)
                  {
                    document.getElementById("mno").innerHTML="Please enter valid mobile no";  
                  }
                 else
                 {
                    document.getElementById("mno").innerHTML="";
                    if(AgeRegex.test(age2)==false)
                    {
                       document.getElementById("age1").innerHTML="Age should be 10-49";
                    }
                    else
                    {
                        document.getElementById("age1").innerHTML="";
                        if(gen2=="" || gen2==null)
                        {
                            document.getElementById("gen1").innerHTML="Select one of them";
                        }
                        else
                        {
                            document.getElementById("gen1").innerHTML="";
                            if(dan2=="" || dan2==null)
                            {
                                document.getElementById("dan1").innerHTML="Select one of them";
                            }
                            else
                            {
                                document.getElementById("dan1").innerHTML="";
                                if(NomRegex.test(nom2)==false)
                                {
                                    document.getElementById("nom1").innerHTML="Members should be 1-9";
                                }
                                else
                                {
                                    document.getElementById("nom1").innerHTML="";
                                    if(dtype2=="" || dtype2==null)
                                    {
                                        document.getElementById("dtype1").innerHTML="Select one of them";
                                    }
                                    else
                                    {
                                        document.getElementById("dtype1").innerHTML="";
                                        if(CommentRegex.test(comment2)==false)
                                        {
                                            document.getElementById("comment1").innerHTML="comment should not contain any special symbol and comment cannot be greater than 220 characters";
                                        }
                                        else
                                        {
                                            document.getElementById("comment1").innerHTML="";
                                            if(agree2==false)
                                            {
                                                 document.getElementById("agree1").innerHTML="Please accept terms and conditions";
                                            }
                                            else
                                            {
                                                document.getElementById("agree1").innerHTML="";
                                                var AddRown=document.getElementById('show');
                                                var NewRow=AddRown.insertRow(n);
                  
                                                list1[x]=document.myform.name.value;
                                                list2[x]=document.myform.email.value;
                                                list3[x]=document.myform.mnum.value;
                                                list4[x]=document.myform.age.value;
                                                list5[x]=document.myform.gender.value;
                                                list6[x]=document.myform.type.value;
                                                list7[x]=document.myform.nom.value;
                                                list8[x]=document.myform.dtype.value;
                                                list9[x]=document.myform.comment.value;
                                                list10[x]= new Date();
                  
                                                var cel1=NewRow.insertCell(0);
                                                var cel2=NewRow.insertCell(1);
                                                var cel3=NewRow.insertCell(2);
                                                var cel4=NewRow.insertCell(3);
                                                var cel5=NewRow.insertCell(4);
                                                var cel6=NewRow.insertCell(5);
                                                var cel7=NewRow.insertCell(6);
                                                var cel8=NewRow.insertCell(7);
                                                var cel9=NewRow.insertCell(8);
                                                var cel10=NewRow.insertCell(9);
                  
                                                cel1.innerHTML=list1[x];
                                                cel2.innerHTML=list2[x];
                                                cel3.innerHTML=list3[x];
                                                cel4.innerHTML=list4[x];
                                                cel5.innerHTML=list5[x];
                                                cel6.innerHTML=list6[x];
                                                cel7.innerHTML=list7[x];
                                                cel8.innerHTML=list8[x];
                                                cel9.innerHTML=list9[x];
                                                cel10.innerHTML=list10[x];
                                                
                                                n++;
                                                x++;
                 
                                                alert("successfully registered");
                                                document.querySelector("form").reset();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    
                    }
                 }
                }
               }
          }
          document.addEventListener("DOMContentLoaded", ()=>{
              document.getElementById("btna").addEventListener("click", validateForm);
          });
