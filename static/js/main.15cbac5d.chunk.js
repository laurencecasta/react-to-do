(this["webpackJsonpreact-demos"]=this["webpackJsonpreact-demos"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(5),l=n.n(r),s=n(3),d=n(6),u=n(7),c=n(2),m=n(9),o=n(8),h=n(1),E=n.n(h),p=function(e){var t=e.task,n=e.index,a=e.handleDelete,r=e.handleEdit,l=e.handleEditChange;return t.isEdit?i.a.createElement("li",{key:t.id},i.a.createElement("form",{onSubmit:function(e){return r(e,t.id)}},i.a.createElement("div",null,i.a.createElement("input",{type:"text",id:"editInput",className:"form-control",name:"editInput",placeholder:"Edit Task",value:t.name,onChange:function(e){return l(e,t.id)}})))):i.a.createElement("li",{key:t.id},i.a.createElement("span",null,n+1,". ",t.name),i.a.createElement("i",{key:E()(),className:"fa fa-minus-circle","aria-hidden":"true",onClick:function(){return a(t.id)}}))},f=function(e){var t=e.tasks,n=e.handleDelete,a=e.handleEdit,r=e.handleEditChange,l=t.map((function(e,t){return i.a.createElement("div",null,i.a.createElement("div",{className:"Row",key:e.id},i.a.createElement(p,{task:e,index:t,handleDelete:n,handleEdit:a,handleEditChange:r}),i.a.createElement("button",{className:e.isEdit?"btn btn-primary":"btn btn-secondary",onClick:function(t){return a(t,e.id)}},e.isEdit?"SUBMIT":"EDIT")),i.a.createElement("hr",null))}));return i.a.createElement("ul",null,l)},k=(n(16),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(s.a)({},a,i))},e.handleEditChange=function(t,n){var a=t.target,i=a.name,r=a.value;e.setState((function(e){return{tasks:e.tasks.map((function(e){var t;return e.id===n?(t={name:r,isEdit:e.isEdit},Object(s.a)(t,i,r),Object(s.a)(t,"id",e.id),t):e}))}}))},e.handelSubmit=function(t){t.preventDefault(),e.setState((function(e){return{tasks:e.tasks.concat([{name:e.taskInput,isEdit:!1,editInput:"",id:E()()}]),taskInput:""}}))},e.handleDelete=function(t){e.setState((function(e){return{tasks:e.tasks.filter((function(e){return e.id!==t}))}}))},e.handleEdit=function(t,n){t.preventDefault(),e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===n?{name:e.name,isEdit:!e.isEdit,editInput:"",id:e.id}:e}))}}))},e.state={tasks:[{name:"task1",isEdit:!1,editInput:"",id:E()()},{name:"task2",isEdit:!1,editInput:"",id:E()()},{name:"task3",isEdit:!1,editInput:"",id:E()()}],taskInput:""},e.handleEditChange=e.handleEditChange.bind(Object(c.a)(e)),e}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-6 mx-auto mt-5"},i.a.createElement("form",{onSubmit:this.handelSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"taskInput"},"Enter task"),i.a.createElement("input",{type:"text",id:"taskInput",className:"form-control",name:"taskInput",placeholder:"New Task",value:this.state.taskInput,onChange:this.handleChange})),i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{className:"btn btn-primary"},"ADD"))),i.a.createElement(f,{tasks:this.state.tasks,handleDelete:this.handleDelete,handleEdit:this.handleEdit,handleEditChange:this.handleEditChange}))}}]),n}(i.a.Component));l.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.15cbac5d.chunk.js.map