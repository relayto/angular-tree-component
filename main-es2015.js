(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+6E/":
/*!*********************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/basic-usage/basic-usage.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BasicUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicUsageComponent", function() { return BasicUsageComponent; });
/* harmony import */ var _raw_loader_basic_usage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./basic-usage.component.html */ "KHBh");
/* harmony import */ var _basic_usage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-usage.component.scss */ "G8ZE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let BasicUsageComponent = class BasicUsageComponent {
    constructor() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
    }
    ngOnInit() {
    }
};
BasicUsageComponent.ctorParameters = () => [];
BasicUsageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basic-usage',
        template: _raw_loader_basic_usage_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_basic_usage_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], BasicUsageComponent);



/***/ }),

/***/ "/oPW":
/*!*****************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/columns-example/columns/columns.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsComponent", function() { return ColumnsComponent; });
/* harmony import */ var _raw_loader_columns_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./columns.component.html */ "NhoM");
/* harmony import */ var _columns_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns.component.scss */ "DU1v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ColumnsComponent = class ColumnsComponent {
    constructor() {
        this.nodes = [
            {
                name: 'Region 1 Headquarter',
                city: 'Central City',
                zipCode: '00001',
                children: [
                    { name: 'Region 1 Subdivision 1', city: 'Highway Town', zipCode: '00002' },
                    { name: 'Region 1 Subdivision 2', city: 'Main Town', zipCode: '00003' }
                ]
            },
            {
                name: 'Region 2 Headquarter',
                city: 'Beach City',
                zipCode: '00010',
                children: [
                    { name: 'Region 2 Subdivision 1', city: 'Palm Town', zipCode: '00011', children: [] },
                    { name: 'Region 2 Subdivision 2', city: 'Sunny Town', zipCode: '00012', children: [
                            { name: 'Customer Subdivision 2/2', city: 'Sunny Town', zipCode: '00012' }
                        ]
                    }
                ]
            },
            { name: 'Region 3 Headquarter', city: 'River City', zipCode: '00100' },
        ];
        this.options = {
            displayField: 'name',
            useVirtualScroll: false,
            nodeHeight: 25,
            allowDrag: false,
            allowDrop: false
        };
        this.columns = ['city', 'zipCode'];
    }
    ngOnInit() {
    }
};
ColumnsComponent.ctorParameters = () => [];
ColumnsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-columns',
        template: _raw_loader_columns_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_columns_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], ColumnsComponent);



/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./projects/docs-app/src/main.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tengelhardt\source\repos\angular-tree-component\projects\docs-app\src\main.ts */"d8W8");


/***/ }),

/***/ "0V/5":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/events/events.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Events</h1>\r\n\r\n<h2>Registering events</h2>\r\n\r\n<p>You can react to whatever happened on the tree by registering to events.</p>\r\n<p>If you're looking to override behaviour - see Customize actions section.</p>\r\n<p>Events use Angular's output:</p>\r\n\r\n<code-example>{{ event }}</code-example>\r\n\r\n\r\n<h2>treeModel</h2>\r\n\r\n<p>All events have a <code>treeModel</code> attribute that allows you to access the tree API.</p>\r\n<p>Specific events and other attributes are listed below:</p>\r\n\r\n\r\n<h2>toggleExpanded</h2>\r\n\r\n<p>Triggers when expanding / collapsing a tree node.</p>\r\n\r\n<code-example language=\"json\">{{ toggleExpanded }}</code-example>\r\n\r\n\r\n<h2>activate / nodeActivate</h2>\r\n<p>Triggers when activating a tree node, by clicking on the node, or by using the Enter / Space keys.</p>\r\n<p>nodeActivate is an alias to support older browser versions.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>deactivate / nodeDeactivate</h2>\r\n<p>Triggers when deactivating a tree node, by clicking on the node, or by using the Enter or Space keys.</p>\r\n<p>nodeDeactivate is an alias to support older browser versions.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>focus</h2>\r\n<p>Triggers when focusing on a node, by moving with the arrow keys.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>blur</h2>\r\n<p>Triggers when focusing on a node, by moving with the arrow keys.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n<h2>initialized</h2>\r\n<p>Triggers after tree model was created.</p>\r\n<p>Good for performing actions immediately on init, like expanding / activating certain nodes, etc.</p>\r\n<p>You can access the tree model using a ref, as described in the API section.</p>\r\n<code-example language=\"json\">{{ eventName }}</code-example>\r\n\r\n\r\n<h2>updateData</h2>\r\nTriggers after tree model was updated, either by changing the inputs of the tree (nodes, options, etc.) or a direct call to <code>update()</code>.\r\n<code-example language=\"json\">{{ eventName }}</code-example>\r\n\r\n\r\n<h2>moveNode</h2>\r\n<p>This event is fired any time moveNode is called on the tree.</p>\r\n<p>Typically - when drag and dropping a node.</p>\r\n<code-example language=\"json\">{{ move }}</code-example>\r\n\r\n\r\n<h2>copyNode</h2>\r\n<p>This event is fired any time copyNode is called on the tree.</p>\r\n<p>Typically - when drag and dropping a node while ctrl key is pressed.</p>\r\n<code-example language=\"json\">{{ copy }}</code-example>\r\n\r\n\r\n<h2>event</h2>\r\n<p>Catch-all event that is triggered on every other event that is triggered.</p>\r\n<p>Useful for doing the same action for different events by checking the eventName.</p>\r\n<p>The parameters will match whatever event was sent originally.</p>\r\n<code-example language=\"json\">{{ baseEvent }}</code-example>\r\n\r\n\r\n<h2>loadNodeChildren</h2>\r\n<p>Callback after async children were added to the tree. The <code>node</code> returned is the parent node.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>changeFilter</h2>\r\n<p>Fired after filter has changed or cleared</p>\r\n<code-example language=\"json\">{{ eventName }}</code-example>\r\n");

/***/ }),

/***/ "0yV0":
/*!*******************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/basic-usage/basic-tree/basic-tree.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTreeComponent", function() { return BasicTreeComponent; });
/* harmony import */ var _raw_loader_basic_tree_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./basic-tree.component.html */ "cE78");
/* harmony import */ var _basic_tree_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-tree.component.scss */ "AVMG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let BasicTreeComponent = class BasicTreeComponent {
    constructor() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
    }
};
BasicTreeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basic-tree',
        template: _raw_loader_basic_tree_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_basic_tree_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], BasicTreeComponent);



/***/ }),

/***/ "1AU6":
/*!***************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/drag-drop-guide/drag-drop-guide.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DragDropGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropGuideComponent", function() { return DragDropGuideComponent; });
/* harmony import */ var _raw_loader_drag_drop_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./drag-drop-guide.component.html */ "A+yZ");
/* harmony import */ var _drag_drop_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-drop-guide.component.scss */ "AP/A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let DragDropGuideComponent = class DragDropGuideComponent {
    constructor() {
        this.options = `
options = {
  allowDrag: (node) => node.isLeaf,
  allowDrop: (element, { parent, index }) {
    // return true / false based on element, to.parent, to.index. e.g.
    return parent.hasChildren;
  },
  getNodeClone: (node) => ({
    ...node.data,
    id: uuid.v4(),
    name: \`copy of \${node.data.name}\`
  })
};

options2 = {
  allowDrag: true,
  allowDrop: false
};
`;
        this.htmlOptions = `
<tree-root
    [nodes]="nodes"
    [options]="options"></tree-root>`;
        this.event = `
  options = {
  allowDrag: true
}

onMoveNode($event) {
  console.log(
    "Moved",
    $event.node.name,
    "to",
    $event.to.parent.name,
    "at index",
    $event.to.index);
}`;
        this.eventHtml = `
<tree-root
  (moveNode)="onMoveNode($event)"
  [nodes]="nodes"
  [options]="options"></tree-root>`;
        this.override = `
options = {
  allowDrag: true,
  actionMapping: {
    mouse: {
      drop: (tree:TreeModel, node:TreeNode, $event:any, {from, to}) => {
        // use from to get the dragged node.
        // use to.parent and to.index to get the drop location
        // use TREE_ACTIONS.MOVE_NODE to invoke the original action
      },
      dragStart?: IActionHandler,
      drag?: IActionHandler,
      dragEnd?: IActionHandler,
      dragOver?: IActionHandler,
      dragLeave?: IActionHandler,
      dragEnter?: IActionHandler
    }
  }
}`;
        this.overrideHtml = `
<tree-root
    [nodes]="nodes"
    [options]="options"></tree-root>`;
        this.dragOutside = `
onDrop($event) {
  // Dropped $event.element
}

allowDrop(element) {
  // Return true/false based on element
}`;
        this.dragOutsideHtml = `
<div (treeDrop)="onDrop($event)"
     [treeAllowDrop]="allowDrop.bind(this)"></div>`;
        this.dragExternal = `
options = {
  actionMapping: {
    mouse: {
      drop: (tree, node, $event, {from, to}) => {
        console.log('drag', from, to); // from === {name: 'first'}
        // Add a node to \`to.parent\` at \`to.index\` based on the data in \`from\`
        // Then call tree.update()
      }
    }
  }
}`;
        this.dragExternalHtml = `
<p [treeDrag]="{name: 'first'}" [treeDragEnabled]="true">Drag me!</p>
<p [treeDrag]="{name: 'second'}">Drag me as well!</p>`;
        this.performance = `
// use private cdr: ChangeDetectorRef in constructor

let treeOptions: ITreeOptions = {
  actionMapping: {
    mouse: {
      dragStart: () => { this.cdr.detach(); },
      dragEnd: () => { this.cdr.reattach(); },
    }
  }
};`;
    }
};
DragDropGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-drag-drop-guide',
        template: _raw_loader_drag_drop_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_drag_drop_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], DragDropGuideComponent);



/***/ }),

/***/ "2Sgx":
/*!***********************************************************************!*\
  !*** ./projects/docs-app/src/app/layout/footer/footer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 40px;\n}\n:host > * {\n  color: #fff;\n}\n.footer-blocks {\n  display: flex;\n  justify-content: center;\n  text-align: left;\n  margin: 0 0 40px;\n}\n.footer-block {\n  margin: 0 24px;\n  vertical-align: top;\n}\na {\n  color: #fff;\n}\nh3 {\n  color: #fff;\n  text-transform: uppercase;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style-type: none;\n  padding: 4px 0;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBQUY7QUFHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQUY7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAwIDQwcHg7XHJcblxyXG4gID4qIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci1ibG9ja3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgMCA0MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWJsb2NrIHtcclxuICBtYXJnaW46IDAgMjRweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "2qCB":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/examples/load-more-example/load-more-example.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Tree partial loading of children</h1>\r\n\r\n<p>\r\n  Sometimes it does not make sense to load all children at once. Especially if there are hundreds of them.\r\n  This example shows how to handle loading of children in chunks.\r\n</p>\r\n\r\n<h2>Working tree</h2>\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/examples/load-more-example/load-more/load-more.component.ts\" target=\"_blank\">Source Code</a></p>\r\n<div class=\"demo-container\">\r\n  <app-load-more></app-load-more>\r\n</div>\r\n\r\n<h2>How to implement</h2>\r\n\r\n<p>\r\n  This example needs no custom templating in the tree at all. All the logic is in handling the nodes and loading of the nodes.\r\n  It is based on the assumption that the data gets populated from an api call and the api can handle returning a specific child subset of data and also returns the total amount.\r\n</p>\r\n<p>\r\n  The base logic behind this implementation is to compare the nodes returned and the nodes shown to figure out if there are more nodes that can be loaded.\r\n  If there are nodes not yet loaded we add a special node to the result before returning the result to the tree.\r\n  If we already loaded nodes we need to remove the old special load more node and add the results.\r\n  To show the loading process we change the name of the node that was clicked into a loading indicator.\r\n</p>\r\n\r\n<h3>Node type</h3>\r\n<p>\r\n  One way to differentiate nodes we added from normal nodes is to introduce a type.\r\n  In the example we have an enum with only one entry, the <code>loadMore</code> type because it's the only one we need.\r\n  The tree itself will not care about this property on each or some nodes and will not rewrite or remove it.\r\n  We can use this type to check what to do when we click on a node. On our <code>loadMore</code> node we need to load data, on a normal node we maybe need to load or show different data.\r\n  The example has no custom templating, but we can also use this type to display different types of nodes with a different style.\r\n</p>\r\n<p>\r\n  Besides the <code>loadMore</code> with the handling shown in the example we can also add an <code>error</code> type.\r\n  If the api calls fails for some reason usually the tree will open a node - but show no results and the user has no opportunity to reload the data.\r\n  Instead of just returning the error we could catch it and add a special error node. If the user clicks on this node we can reload the data again.\r\n</p>\r\n");

/***/ }),

/***/ "3Jqi":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/focus/focus.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Focused</h1>\r\n\r\n<code-example>{{ focus }}</code-example>\r\n\r\n<h2>@Input() focused</h2>\r\n\r\n<p>Whether the tree should be focused. Key navigation only works when the tree is focused.</p>\r\n<p>Default value: <code>false</code>.</p>\r\n");

/***/ }),

/***/ "3VUB":
/*!*****************************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: StateBindingDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateBindingDemoComponent", function() { return StateBindingDemoComponent; });
/* harmony import */ var _raw_loader_state_binding_demo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./state-binding-demo.component.html */ "58Rf");
/* harmony import */ var _state_binding_demo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-binding-demo.component.scss */ "EvgD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let StateBindingDemoComponent = class StateBindingDemoComponent {
    constructor() {
        this.options = {
            getChildren: () => new Promise((resolve) => {
                setTimeout(() => resolve([
                    { id: 5, name: 'child2.1', children: [] },
                    { id: 6, name: 'child2.2', children: [
                            { id: 7, name: 'grandchild2.2.1' }
                        ] }
                ]), 2000);
            })
        };
        this.nodes = [
            {
                id: 1,
                name: 'root1',
                children: [
                    { id: 2, name: 'child1' },
                    { id: 3, name: 'child2' }
                ]
            },
            {
                id: 4,
                name: 'root2',
                hasChildren: true
            }
        ];
    }
    get state() {
        return localStorage.treeState && JSON.parse(localStorage.treeState);
    }
    set state(state) {
        localStorage.treeState = JSON.stringify(state);
    }
};
StateBindingDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-state-binding-demo',
        template: _raw_loader_state_binding_demo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_state_binding_demo_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], StateBindingDemoComponent);



/***/ }),

/***/ "3toA":
/*!************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/checkboxes-guide/checkboxes/checkboxes.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "49vC":
/*!***********************************************************************!*\
  !*** ./projects/docs-app/src/app/custom-elements/code/code.module.ts ***!
  \***********************************************************************/
/*! exports provided: CodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeModule", function() { return CodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code.component */ "Ayrf");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _pretty_printer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pretty-printer.service */ "JfD2");
/* harmony import */ var _shared_copier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/copier.service */ "l5w9");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CodeModule = class CodeModule {
};
CodeModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]],
        declarations: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
        entryComponents: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
        exports: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
        providers: [_pretty_printer_service__WEBPACK_IMPORTED_MODULE_4__["PrettyPrinter"], _shared_copier_service__WEBPACK_IMPORTED_MODULE_5__["CopierService"]]
    })
], CodeModule);



/***/ }),

/***/ "4CxF":
/*!***************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/events/events.component.ts ***!
  \***************************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _raw_loader_events_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./events.component.html */ "0V/5");
/* harmony import */ var _events_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.component.scss */ "G7yB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let EventsComponent = class EventsComponent {
    constructor() {
        this.event = `
<tree-root [nodes]="nodes"
    (toggleExpanded)="onEvent($event)"
    (activate)="onEvent($event)"
    (focus)="onEvent($event)"
    (blur)="onEvent($event)">
</tree-root>

onEvent = ($event) => console.log($event);
`;
        this.toggleExpanded = `
{
  eventName: string;
  node: ITreeNode;
  isActive: boolean;
}
`;
        this.basicEvent = `
{
  eventName: string;
  node: ITreeNode;
}
`;
        this.eventName = `
{
  eventName: string;
}
`;
        this.move = `
{
  eventName: string;
  node: ITreeNode; // The node that was moved
  to: {
    parent: ITreeNode; // The parent node that contains the moved node
    index: number; // Index in the parent where the node was moved
  }
}
`;
        this.copy = `
{
  eventName: string;
  node: ITreeNode; // The node that was copied
  to: {
    parent: ITreeNode; // The parent node that contains the copied node
    index: number; // Index in the parent where the node was copied
  }
}
`;
        this.baseEvent = `
{
  eventName: string;
  ...rest: corresponding to the original event
}`;
        // TODO: add stateChange
    }
};
EventsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-events',
        template: _raw_loader_events_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_events_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], EventsComponent);



/***/ }),

/***/ "535d":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/layout/footer/footer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer-blocks\">\r\n    <div class=\"footer-block\">\r\n        <h3>Help</h3>\r\n        <ul>\r\n            <li><a href=\"https://angular-tree-component.herokuapp.com/\" target=\"_blank\">Slack</a></li>\r\n            <li><a href=\"https://stackoverflow.com/questions/tagged/angular-tree-component\" target=\"_blank\">Stackoverflow</a></li>\r\n            <li><a href=\"https://github.com/CirclonGroup/angular-tree-component/issues\" target=\"_blank\">Report Issues</a></li>\r\n            <li><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/CODE_OF_CONDUCT.md\" target=\"_blank\">Code of Conduct</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<p>Powered by the Community. Code licensed under an <a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/LICENSE\" target=\"_blank\">MIT-style License</a>.</p>\r\n");

/***/ }),

/***/ "58ED":
/*!*************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/load-more-example/load-more/load-more.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkLW1vcmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "58Rf":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"filter nodes\"/>\r\n<tree-root [options]=\"options\" [(state)]=\"state\" #tree [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\r\n");

/***/ }),

/***/ "5TQ5":
/*!***************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/focus/focus.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb2N1cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "5ic2":
/*!*************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/focus/focus.component.ts ***!
  \*************************************************************************/
/*! exports provided: FocusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusComponent", function() { return FocusComponent; });
/* harmony import */ var _raw_loader_focus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./focus.component.html */ "3Jqi");
/* harmony import */ var _focus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focus.component.scss */ "5TQ5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FocusComponent = class FocusComponent {
    constructor() {
        this.focus = `<tree-root [nodes]="nodes" [focused]="true" [options]="options"></tree-root>`;
    }
};
FocusComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-focus',
        template: _raw_loader_focus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_focus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], FocusComponent);



/***/ }),

/***/ "6JDo":
/*!*******************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/async-guide/async/async.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AsyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncComponent", function() { return AsyncComponent; });
/* harmony import */ var _raw_loader_async_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./async.component.html */ "7pJk");
/* harmony import */ var _async_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async.component.scss */ "Ac6d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AsyncComponent = class AsyncComponent {
    constructor() {
        this.options = {
            getChildren: this.getChildren.bind(this),
            useCheckbox: true
        };
        this.nodes = [];
        this.asyncChildren = [
            {
                name: 'child1',
                hasChildren: true
            }, {
                name: 'child2'
            }
        ];
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' }
                ]
            },
            {
                name: 'root2',
                hasChildren: true
            },
            {
                name: 'root3'
            }
        ];
    }
    getChildren(node) {
        const newNodes = this.asyncChildren.map((c) => Object.assign({}, c));
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(newNodes), 1000);
        });
    }
};
AsyncComponent.ctorParameters = () => [];
AsyncComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-async',
        template: _raw_loader_async_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_async_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], AsyncComponent);



/***/ }),

/***/ "6cby":
/*!************************************************************************************!*\
  !*** ./projects/docs-app/src/app/custom-elements/lazy-custom-element.component.ts ***!
  \************************************************************************************/
/*! exports provided: LazyCustomElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyCustomElementComponent", function() { return LazyCustomElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _elements_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements-loader */ "8fFk");
/* harmony import */ var _shared_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/logger.service */ "GCFs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LazyCustomElementComponent = class LazyCustomElementComponent {
    constructor(elementRef, elementsLoader, logger) {
        this.elementRef = elementRef;
        this.elementsLoader = elementsLoader;
        this.logger = logger;
        this.selector = '';
    }
    ngOnInit() {
        if (!this.selector || /[^\w-]/.test(this.selector)) {
            this.logger.error(new Error(`Invalid selector for 'aio-lazy-ce': ${this.selector}`));
            return;
        }
        this.elementRef.nativeElement.innerHTML = `<${this.selector}></${this.selector}>`;
        this.elementsLoader.loadCustomElement(this.selector);
    }
};
LazyCustomElementComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _elements_loader__WEBPACK_IMPORTED_MODULE_1__["ElementsLoader"] },
    { type: _shared_logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] }
];
LazyCustomElementComponent.propDecorators = {
    selector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
LazyCustomElementComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'aio-lazy-ce',
        template: '',
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
        _elements_loader__WEBPACK_IMPORTED_MODULE_1__["ElementsLoader"],
        _shared_logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]])
], LazyCustomElementComponent);



/***/ }),

/***/ "6l60":
/*!*******************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/styling/styling.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "7D0X":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/templates/templates-demo/templates-demo.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>treeNodeTemplate and loadingTemplate</h3>\r\n<tree-root id=\"tree1\" [focused]=\"true\" [nodes]=\"nodes1\" [options]=\"options1\">\r\n    <ng-template #treeNodeTemplate let-node let-index=\"index\">\r\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\r\n        <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\r\n    </ng-template>\r\n    <ng-template #loadingTemplate let-node>\r\n        <div [class]=\"node.data.className + 'Loading'\">Loading {{ node.data.title }}...</div>\r\n    </ng-template>\r\n</tree-root>\r\n\r\n<h3>treeNodeWrapper</h3>\r\n<tree-root id=\"tree3\" [focused]=\"true\" [nodes]=\"nodes2\" [options]=\"options1\">\r\n    <ng-template #treeNodeWrapperTemplate let-node let-index=\"index\">\r\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\r\n        <input type=\"checkbox\"><span>&rarr;</span>\r\n        <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\r\n    </ng-template>\r\n</tree-root>\r\n<h3>treeNodeFullTemplate</h3>\r\n<tree-root id=\"tree2\" [focused]=\"true\" [nodes]=\"nodes2\">\r\n    <ng-template #treeNodeFullTemplate let-node let-index=\"index\" let-templates=\"templates\">\r\n        <div class=\"tree-node\">\r\n            <input type=\"checkbox\" [checked]=\"node.isActive\" (change)=\"node.toggleActivated(true)\" />\r\n            <tree-node-expander [node]=\"node\"></tree-node-expander>\r\n            <div\r\n                    class=\"node-content-wrapper\"\r\n                    [class.node-content-wrapper-active]=\"node.isActive\"\r\n                    [class.node-content-wrapper-focused]=\"node.isFocused\"\r\n                    (click)=\"node.toggleActivated(true)\">\r\n                <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\r\n                <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\r\n            </div>\r\n            <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\r\n        </div>\r\n    </ng-template>\r\n</tree-root>\r\n");

/***/ }),

/***/ "7Ih2":
/*!*********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/auto-scroll-guide/auto-scroll-guide.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvLXNjcm9sbC1ndWlkZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "7NSS":
/*!****************************************************!*\
  !*** ./projects/docs-app/src/app/app.component.ts ***!
  \****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "dG/u");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "e8Lv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AppComponent = class AppComponent {
    constructor(iconRegistry, sanitizer, router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.baseTitle = 'Angular Tree Component';
        this.nav = [
            { title: 'Getting Started', children: null, link: [''] },
            { title: 'Fundamentals', children: [
                    { title: 'Nodes', url: 'fundamentals/nodes', children: null, link: ['fundamentals', 'nodes'] },
                    { title: 'Options', url: 'fundamentals/options', children: null, link: ['fundamentals', 'options'] },
                    { title: 'Customize Actions', url: 'fundamentals/actions', children: null, link: ['fundamentals', 'actions'] },
                    { title: 'Custom Templates', url: 'fundamentals/templates', children: null, link: ['fundamentals', 'templates'] },
                    { title: 'Events', url: 'fundamentals/events', children: null, link: ['fundamentals', 'events'] },
                    { title: '2-way binding to state', url: 'fundamentals/state', children: null, link: ['fundamentals', 'state'] },
                    { title: 'Calling API Methods', url: 'fundamentals/api', children: null, link: ['fundamentals', 'api'] },
                    { title: 'Styling', url: 'fundamentals/styling', children: null, link: ['fundamentals', 'styling'] },
                    { title: 'Focused', url: 'fundamentals/focus', children: null, link: ['fundamentals', 'focus'] },
                    { title: 'Common issues', url: 'fundamentals/issues', children: null, link: ['fundamentals', 'issues'] },
                ]
            },
            { title: 'Guides', children: [
                    { title: 'Async Data', url: 'guides/async', children: null, link: ['guides', 'async'] },
                    { title: 'Filtering', url: 'guides/filter', children: null, link: ['guides', 'filter'] },
                    { title: 'Updating the tree', url: 'guides/update', children: null, link: ['guides', 'update'] },
                    { title: 'Drag & Drop', url: 'guides/dragdrop', children: null, link: ['guides', 'dragdrop'] },
                    { title: 'Checkboxes', url: 'guides/checkboxes', children: null, link: ['guides', 'checkboxes'] },
                    { title: 'Large Trees & Virtual Scroll', url: 'guides/largetree', children: null, link: ['guides', 'largetree'] },
                    { title: 'Redux / Immutable Data', url: 'guides/redux', children: null, link: ['guides', 'redux'] },
                    { title: 'RTL', url: 'guides/rtl', children: null, link: ['guides', 'rtl'] },
                    { title: 'Custom Fields', url: 'guides/customfields', children: null, link: ['guides', 'customfields'] },
                    { title: 'Expanding nodes on init', url: 'guides/expanding', children: null, link: ['guides', 'expanding'] },
                    { title: 'Auto Scrolling', url: 'guides/autoscroll', children: null, link: ['guides', 'autoscroll'] },
                ]
            },
            { title: 'Examples', children: [
                    { title: 'Basic', url: 'examples/basic', children: null, link: ['examples', 'basic'] },
                    { title: 'Columns', url: 'examples/columns', children: null, link: ['examples', 'columns'] },
                    { title: 'CRUD', url: 'examples/crud', children: null, link: ['examples', 'crud'] },
                    { title: 'Load more', url: 'examples/loadmore', children: null, link: ['examples', 'loadmore'] },
                ]
            },
        ];
        this.currentNodes = [];
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github-icon.svg'));
        iconRegistry.addSvgIcon('tree-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/tree-logo.svg'));
        // TODO: build this nice
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]))
            .subscribe((event) => {
            let newCurrent = [];
            this.nav.forEach(navNode => {
                if (navNode.link && this.router.isActive(this.router.createUrlTree(navNode.link), false)) {
                    newCurrent.push(Object.assign({}, navNode));
                }
                if (navNode.children) {
                    navNode.children.forEach(childNode => {
                        if (childNode.link && this.router.isActive(this.router.createUrlTree(childNode.link), false)) {
                            newCurrent.push(Object.assign({}, childNode));
                        }
                    });
                }
            });
            if (newCurrent.length >= 2 && newCurrent.find(n => n.title === this.nav[0].title) !== undefined) {
                newCurrent = newCurrent.filter(n => n.title !== this.nav[0].title);
            }
            // set title on all but landing page
            if ((newCurrent === null || newCurrent === void 0 ? void 0 : newCurrent.length) && newCurrent[0].title !== 'Getting Started') {
                this.titleService.setTitle(`${this.baseTitle} - ${newCurrent[0].title}`);
            }
            else {
                this.titleService.setTitle(this.baseTitle);
            }
            this.currentNodes = newCurrent;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
], AppComponent);



/***/ }),

/***/ "7WUN":
/*!*************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/custom-fields-guide/custom-fields-guide.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tZmllbGRzLWd1aWRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "7pJk":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/async-guide/async/async.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tree-root #tree [options]=\"options\" [nodes]=\"nodes\"></tree-root>\r\n");

/***/ }),

/***/ "7pyI":
/*!***********************************************************!*\
  !*** ./projects/docs-app/src/app/shared/shared.module.ts ***!
  \***********************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "7tVa":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/large-tree-guide/large-tree/large-tree.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 500px; overflow: hidden;\">\r\n  <tree-root\r\n    #tree\r\n    [nodes]=\"nodes\"\r\n    [options]=\"options\"\r\n    [focused]=\"true\"\r\n  >\r\n  </tree-root>\r\n</div>\r\n");

/***/ }),

/***/ "8CB6":
/*!*****************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/columns-example/columns-example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ColumnsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsExampleComponent", function() { return ColumnsExampleComponent; });
/* harmony import */ var _raw_loader_columns_example_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./columns-example.component.html */ "mHhP");
/* harmony import */ var _columns_example_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns-example.component.scss */ "sGd5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ColumnsExampleComponent = class ColumnsExampleComponent {
    constructor() { }
    ngOnInit() {
    }
};
ColumnsExampleComponent.ctorParameters = () => [];
ColumnsExampleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-columns-example',
        template: _raw_loader_columns_example_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_columns_example_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], ColumnsExampleComponent);



/***/ }),

/***/ "8Vlq":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/options/options.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Options</h1>\r\n\r\n<code-example>&lt;tree-root [nodes]=nodes [options]=\"options\"&gt;&lt;/tree-root&gt;</code-example>\r\n\r\n<h2>options</h2>\r\n\r\n<p>Object of type <code>ITreeOptions</code></p>\r\n\r\n<p>Example:</p>\r\n\r\n<code-example>{{ options }}</code-example>\r\n");

/***/ }),

/***/ "8fFk":
/*!**********************************************************************!*\
  !*** ./projects/docs-app/src/app/custom-elements/elements-loader.ts ***!
  \**********************************************************************/
/*! exports provided: ElementsLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsLoader", function() { return ElementsLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _element_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-registry */ "z0PY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ "kH7g");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ElementsLoader = class ElementsLoader {
    constructor(moduleRef, elementModulePaths, compiler) {
        this.moduleRef = moduleRef;
        this.compiler = compiler;
        /** Map of custom elements that are in the process of being loaded and registered. */
        this.elementsLoading = new Map();
        this.elementsToLoad = new Map(elementModulePaths);
    }
    /**
     * Queries the provided element for any custom elements that have not yet been registered with
     * the browser. Custom elements that are registered will be removed from the list of unregistered
     * elements so that they will not be queried in subsequent calls.
     */
    loadContainedCustomElements(element) {
        const unregisteredSelectors = Array.from(this.elementsToLoad.keys())
            .filter(s => element.querySelector(s));
        if (!unregisteredSelectors.length) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }
        // Returns observable that completes when all discovered elements have been registered.
        const allRegistered = Promise.all(unregisteredSelectors.map(s => this.loadCustomElement(s)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(allRegistered.then(() => undefined));
    }
    /** Loads and registers the custom element defined on the `WithCustomElement` module factory. */
    loadCustomElement(selector) {
        if (this.elementsLoading.has(selector)) {
            // The custom element is in the process of being loaded and registered.
            return this.elementsLoading.get(selector);
        }
        if (this.elementsToLoad.has(selector)) {
            // Load and register the custom element (for the first time).
            const modulePathLoader = this.elementsToLoad.get(selector);
            const loadedAndRegistered = modulePathLoader()
                .then(elementModuleOrFactory => {
                /**
                 * With View Engine, the NgModule factory is created and provided when loaded.
                 * With Ivy, only the NgModule class is provided loaded and must be compiled.
                 * This uses the same mechanism as the deprecated `SystemJsNgModuleLoader` in
                 * in `packages/core/src/linker/system_js_ng_module_factory_loader.ts`
                 * to pass on the NgModuleFactory, or compile the NgModule and return its NgModuleFactory.
                 */
                if (elementModuleOrFactory instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactory"]) {
                    return elementModuleOrFactory;
                }
                else {
                    return this.compiler.compileModuleAsync(elementModuleOrFactory);
                }
            })
                .then(elementModuleFactory => {
                const elementModuleRef = elementModuleFactory.create(this.moduleRef.injector);
                const injector = elementModuleRef.injector;
                const CustomElementComponent = elementModuleRef.instance.customElementComponent;
                const CustomElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(CustomElementComponent, { injector });
                customElements.define(selector, CustomElement);
                return customElements.whenDefined(selector);
            })
                .then(() => {
                // The custom element has been successfully loaded and registered.
                // Remove from `elementsLoading` and `elementsToLoad`.
                this.elementsLoading.delete(selector);
                this.elementsToLoad.delete(selector);
            })
                .catch(err => {
                // The custom element has failed to load and register.
                // Remove from `elementsLoading`.
                // (Do not remove from `elementsToLoad` in case it was a temporary error.)
                this.elementsLoading.delete(selector);
                return Promise.reject(err);
            });
            this.elementsLoading.set(selector, loadedAndRegistered);
            return loadedAndRegistered;
        }
        // The custom element has already been loaded and registered.
        return Promise.resolve();
    }
};
ElementsLoader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"] },
    { type: Map, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_element_registry__WEBPACK_IMPORTED_MODULE_1__["ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"] }
];
ElementsLoader = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"],
        Map,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]])
], ElementsLoader);



/***/ }),

/***/ "8qNY":
/*!*********************************************************************!*\
  !*** ./projects/docs-app/src/app/layout/footer/footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "535d");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "2Sgx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "9+HR":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/examples/crud-example/crud-example.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Tree with create, copy and delete options</h1>\r\n\r\n<h2>Working tree</h2>\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/examples/crud-example/crud/crud.component.ts\" target=\"_blank\">Source Code</a></p>\r\n<div class=\"demo-container\">\r\n  <app-crud></app-crud>\r\n</div>\r\n\r\n<h2>How to implement</h2>\r\n\r\n<p>\r\n  This example is based on <a href=\"https://github.com/CirclonGroup/angular-tree-component/issues/813\" target='_blank'>Issue 813</a>.\r\n  It relies on the <code>treeNodeTemplate</code> to customize the display of each node.\r\n  The example uses simple buttons to handle basic functions for creating, copying and deleting nodes.\r\n</p>\r\n<p>\r\n  The example does not show a edit function because of the endless possibilities on how to implement this.\r\n  One option could be to show an input field instead of the <code>span</code> with the name of the node.\r\n  This could be triggered via button, double click or how your app enters edit mode.\r\n</p>\r\n");

/***/ }),

/***/ "9NPp":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/filter-guide/filter/filter.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Filter</h2>\r\n<input id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"filter nodes\"/>\r\n<button (click)=\"tree.treeModel.clearFilter()\">Clear Filter</button>\r\n<tree-root #tree [focused]=\"true\" [options]=\"options\" [nodes]=\"nodes\"></tree-root>\r\n<input id=\"filter2\" #filter2 (keyup)=\"tree.treeModel.filterNodes(filter2.value, false)\" placeholder=\"filter nodes\"/>\r\n<h3>Filter By Function (Fuzzy Search)</h3>\r\n<input id=\"filter3\" #filter3 (keyup)=\"filterFn(filter3.value, tree.treeModel)\" placeholder=\"filter nodes by fuzzy search\"/>\r\n");

/***/ }),

/***/ "9Ror":
/*!*************************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/api/api-demo/api-demo.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcGktZGVtby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "A+yZ":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/drag-drop-guide/drag-drop-guide.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Drag & Drop</h1>\r\n\r\n<h2>Demo</h2>\r\n\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/guides/drag-drop-guide/drag-drop/drag-drop.component.ts\" target=\"_blank\">Source Code</a></p>\r\n\r\n<div class=\"demo-container\">\r\n  <app-drag-drop></app-drag-drop>\r\n</div>\r\n\r\n<h2>Options</h2>\r\n\r\n<p>Allow drag & drop using <code>allowDrag</code> flag in tree options</p>\r\n<code-example [header]=\"'typescript'\">{{ options }}</code-example>\r\n<code-example [header]=\"'html'\">{{ htmlOptions }}</code-example>\r\n\r\n<h3>Dragging</h3>\r\n<p>Enable dragging with <code>allowDrag</code> option (default false) accepts either a boolean or a function:</p>\r\n<ul>\r\n  <li>Boolean value - decides if drop is allowed or not on the tree</li>\r\n  <li>\r\n    Function - decides on a per node basis if drop is allowed. The function receives:\r\n    <ul><li>\r\n      node - the dragged TreeNode\r\n    </li></ul>\r\n  </li>\r\n</ul>\r\n\r\n<h3>Dropping</h3>\r\n<p>Enable selective dropping with the <code>allowDrop</code> option (default true) accepts either a boolean or a function:</p>\r\n<ul>\r\n  <li>Boolean value - decides if drop is allowed or not on the tree</li>\r\n  <li>\r\n    Function - decides on a per node basis if drop is allowed. The function receives:\r\n    <ul>\r\n      <li>element - the dragged element</li>\r\n      <li>\r\n        to - drop location structure\r\n        <ul>\r\n          <li>parent - the parent node</li>\r\n          <li>index - the index inside the parent's children where the element is dropped</li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<h3>Copying</h3>\r\n<p>The default behaviour of the tree is to copy the node when <code>ctrl</code> is pressed while dropping the node</p>\r\n<ul>\r\n  <li>By default the tree will shallow-clone the node data and generates a random ID</li>\r\n  <li>if <code>getNodeClone</code> option is supplied, it will be called to get a copy of the node. It receives a TreeNode object, and should return a node object (only the data).</li>\r\n</ul>\r\n\r\n<h2>Event</h2>\r\n<p>You can listen to <code>moveNode</code> events and get the moved node, and its new location in the tree</p>\r\n<p>listen to moveNode events</p>\r\n<code-example [header]=\"'typescript'\">{{ event }}</code-example>\r\n<code-example [header]=\"'html'\">{{ eventHtml }}</code-example>\r\n\r\n\r\n<h2>Override default behaviour</h2>\r\n\r\n<p>Use <code>actionMapping.mouse.drop</code> to override the default drag behaviour.</p>\r\n<p>You can also listen to all other drag events like <code>dragEnd</code>, <code>dragLeave</code> etc.:</p>\r\n<p>Override drag & drop action in actionMapping</p>\r\n\r\n<code-example [header]=\"'typescript'\">{{ override }}</code-example>\r\n<code-example [header]=\"'html'\">{{ overrideHtml }}</code-example>\r\n\r\n<p>In the drop callback, you get a <code>from</code> and <code>to</code> objects:</p>\r\n<ul>\r\n  <li>\r\n    <code>from</code>\r\n    <ul>\r\n      <li>If dragging a node, then from === the dragged node</li>\r\n      <li>If dragging something else, it is the draggedElement (see treeDrag directive below)</li>\r\n    </ul>\r\n  </li>\r\n  <li>\r\n    <code>to</code>\r\n    <ul>\r\n      <li>parent: the parent node</li>\r\n      <li>index: the index inside the parent's children where the node should be dropped</li>\r\n      <li>dropOnNode: distinguish between dropping on the node itself or the drop slot</li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n\r\n<h2>Drag and drop between trees</h2>\r\n<p>This is enabled by default when dragging is enabled.</p>\r\n\r\n\r\n<h2>Drag a node outside of the tree</h2>\r\n<p>You can use the (treeDrop) directive to allow dragging nodes to an external element.</p>\r\n<p>For example:</p>\r\n<p>use (treeDrop) to drag an external element to the tree</p>\r\n<code-example [header]=\"'html'\">{{ dragOutsideHtml }}</code-example>\r\n<code-example [header]=\"'typescript'\">{{ dragOutside }}</code-example>\r\n<p>Use <code>$event.element</code> inside the callback.</p>\r\n<p>Use <code>[treeAllowDrop]</code> Input to specify a function that runs onDragOver, and decides if the dropping is allowed or not.</p>\r\n\r\n\r\n<h2>Drag an external element into the tree</h2>\r\n<p>You can use the <code>[treeDrag]</code> directive to allow dragging external elements into the tree.</p>\r\n<p>Then use a custom action to handle the drop <a [routerLink]=\"['/', 'fundamentals', 'actions']\">(see Action Mapping section)</a>.</p>\r\n<p>For example:</p>\r\n\r\n<code-example [header]=\"'typescript'\">{{ dragExternal }}</code-example>\r\n<code-example [header]=\"'html'\">{{ dragExternalHtml }}</code-example>\r\n\r\n<p>The data that you pass to <code>[treeDrag]</code> will be passed to the handler in the <code>from</code> parameter.</p>\r\n<p>Use <code>to.parent</code> and <code>to.index</code> to get the drop location.</p>\r\n<p>Use <code>to.dropOnNode</code> to distinguish between dropping on the node itself or the drop slot.</p>\r\n<p>If you add a new node to the tree, you'll need to call <code>tree.update()</code> afterwards.</p>\r\n<p>Use <code>[treeDragEnabled]</code> boolean Input to decide if the drag is enabled or not.</p>\r\n\r\n\r\n<h2>Drag to an empty tree</h2>\r\n<p>To drag to an empty tree, set your nodes to an empty array.</p>\r\n<p>If nodes is undefined or null, the drop slot will not appear.</p>\r\n\r\n\r\n<h2>Mobile</h2>\r\n<p>To support drag and drop on mobile, you can use DragDropTouch polyfill in your project to enable it.</p>\r\n<p>Download the code from here: <a href=\"https://github.com/Bernardo-Castilho/dragdroptouch\" target=\"_blank\">https://github.com/Bernardo-Castilho/dragdroptouch</a></p>\r\n<p>Place it somewhere in your code, and import it from polyfills.ts, or just place a script tag to include it.</p>\r\n\r\n\r\n<h2>Performance Issues</h2>\r\n<p>It there are performance issues on large trees while drag and drop it's possible to detach change detection during the drag.</p>\r\n<code-example>{{ performance }}</code-example>\r\n");

/***/ }),

/***/ "A/o4":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/issues/issues.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Common Issues</h1>\r\n\r\n<h2>Tree not rendered</h2>\r\n<p>Case: when tree is hidden (for example inside tab or modal), it is not rendered when it becomes visible.</p>\r\n<p>Solution: after it becomes visible (preferably using <code>setTimeout</code>) - call <code>tree.sizeChanged()</code>, which recalculates the rendered nodes according to the actual viewport size.</p>\r\n\r\n<h2>Tree state (expanded / selected nodes) gets lost</h2>\r\n<p>Maybe you are not supplying unique IDs to the nodes.</p>\r\n<p>The tree maintains its state by using IDs, and if you don't supply ones the tree will generate random ones automatically. Which means that if you update the data - the state will be lost.</p>\r\n\r\n<h2>Scroll Into View doesn't work</h2>\r\n<p>See <code>scrollContainer</code> option in <a [routerLink]=\"['/', 'fundamentals', 'options']\">Options</a> for more information.</p>\r\n");

/***/ }),

/***/ "A4gN":
/*!*****************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/issues/issues.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc3N1ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "AMcD":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/custom-fields-guide/custom-fields-guide.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Custom Fields</h1>\r\n\r\n<p>Node field names are customizable using the following options:</p>\r\n<ul>\r\n  <li><code>childrenField</code></li>\r\n  <li><code>displayField</code></li>\r\n  <li><code>idField</code></li>\r\n  <li><code>isExpandedField</code></li>\r\n  <li><code>hasChildrenField</code></li>\r\n</ul>\r\n\r\n<h2>Example</h2>\r\n<code-example>{{ javascript }}</code-example>\r\n");

/***/ }),

/***/ "AP/A":
/*!*****************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/drag-drop-guide/drag-drop-guide.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmFnLWRyb3AtZ3VpZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "AVMG":
/*!*********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/basic-usage/basic-tree/basic-tree.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10cmVlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "AY8m":
/*!*********************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/api/api.component.ts ***!
  \*********************************************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var _raw_loader_api_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./api.component.html */ "XkNn");
/* harmony import */ var _api_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.component.scss */ "fLSB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ApiComponent = class ApiComponent {
    constructor() {
        this.html = `
<tree-root #tree [nodes]="nodes"></tree-root>

<button (click)="tree.treeModel.focusNextNode()">next node</button>
<button (click)="tree.treeModel.focusPreviousNode()">previous node</button>
<button (click)="tree.treeModel.focusDrillDown()">drill down</button>
<button (click)="tree.treeModel.focusDrillUp()">drill up</button>
`;
    }
};
ApiComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-api',
        template: _raw_loader_api_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_api_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], ApiComponent);



/***/ }),

/***/ "AZBi":
/*!*****************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/rtl-guide/rtl-guide.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydGwtZ3VpZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Ac6d":
/*!*********************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/async-guide/async/async.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3luYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Ayrf":
/*!**************************************************************************!*\
  !*** ./projects/docs-app/src/app/custom-elements/code/code.component.ts ***!
  \**************************************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _pretty_printer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pretty-printer.service */ "JfD2");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_copier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/copier.service */ "l5w9");
/* harmony import */ var _shared_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/logger.service */ "GCFs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Formatted Code Block
 *
 * Pretty renders a code block, used in the docs and API reference by the code-example and
 * code-tabs embedded components.
 * It includes a "copy" button that will send the content to the clipboard when clicked
 *
 * Example usage:
 *
 * ```
 * <aio-code
 *   [language]="ts"
 *   [linenums]="true"
 *   [path]="router/src/app/app.module.ts"
 *   [region]="animations-module">
 * </aio-code>
 * ```
 *
 *
 * Renders code provided through the `updateCode` method.
 */
let CodeComponent = class CodeComponent {
    constructor(snackbar, pretty, copier, logger) {
        this.snackbar = snackbar;
        this.pretty = pretty;
        this.copier = copier;
        this.logger = logger;
        this.ariaLabel = '';
        this.codeFormatted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** Code that should be formatted with current inputs and displayed in the view. */
    set code(code) {
        this._code = code;
        if (!this._code || !this._code.trim()) {
            this.showMissingCodeMessage();
        }
        else {
            this.formatDisplayedCode();
        }
    }
    get code() { return this._code; }
    /** Optional header to be displayed above the code. */
    set header(header) {
        this._header = header;
        this.ariaLabel = this.header ? `Copy code snippet from ${this.header}` : '';
    }
    get header() { return this._header; }
    ngOnChanges() {
        // If some inputs have changed and there is code displayed, update the view with the latest
        // formatted code.
        if (this.code) {
            this.formatDisplayedCode();
        }
    }
    formatDisplayedCode() {
        const leftAlignedCode = leftAlign(this.code);
        this.setCodeHtml(leftAlignedCode); // start with unformatted code
        this.codeText = this.getCodeText(); // store the unformatted code as text (for copying)
        this.pretty
            .formatCode(leftAlignedCode, this.language, this.getLinenums())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.codeFormatted.emit()))
            .subscribe(c => this.setCodeHtml(c), () => { });
    }
    /** Sets the message showing that the code could not be found. */
    showMissingCodeMessage() {
        const src = this.path ? this.path + (this.region ? '#' + this.region : '') : '';
        const srcMsg = src ? ` for\n${src}` : '.';
        this.setCodeHtml(`<p class="code-missing">The code sample is missing${srcMsg}</p>`);
    }
    /** Sets the innerHTML of the code container to the provided code string. */
    setCodeHtml(formattedCode) {
        // **Security:** Code example content is provided by docs authors and as such its considered to
        // be safe for innerHTML purposes.
        this.codeContainer.nativeElement.innerHTML = formattedCode;
    }
    /** Gets the textContent of the displayed code element. */
    getCodeText() {
        // `prettify` may remove newlines, e.g. when `linenums` are on. Retrieve the content of the
        // container as text, before prettifying it.
        // We take the textContent because we don't want it to be HTML encoded.
        return this.codeContainer.nativeElement.textContent;
    }
    /** Copies the code snippet to the user's clipboard. */
    doCopy() {
        const code = this.codeText;
        const successfullyCopied = this.copier.copyText(code);
        if (successfullyCopied) {
            this.logger.log('Copied code to clipboard:', code);
            this.snackbar.open('Code Copied', '', { duration: 800 });
        }
        else {
            this.logger.error(new Error(`ERROR copying code to clipboard: "${code}"`));
            this.snackbar.open('Copy failed. Please try again!', '', { duration: 800 });
        }
    }
    /** Gets the calculated value of linenums (boolean/number). */
    getLinenums() {
        const linenums = typeof this.linenums === 'boolean' ? this.linenums :
            this.linenums === 'true' ? true :
                this.linenums === 'false' ? false :
                    typeof this.linenums === 'string' ? parseInt(this.linenums, 10) :
                        this.linenums;
        return (linenums != null) && !isNaN(linenums) && linenums;
    }
};
CodeComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _pretty_printer_service__WEBPACK_IMPORTED_MODULE_1__["PrettyPrinter"] },
    { type: _shared_copier_service__WEBPACK_IMPORTED_MODULE_4__["CopierService"] },
    { type: _shared_logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"] }
];
CodeComponent.propDecorators = {
    hideCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    language: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    linenums: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    region: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    codeFormatted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    codeContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['codeContainer', { static: true },] }]
};
CodeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'aio-code',
        template: `
    <pre class="prettyprint lang-{{language}}">
      <button *ngIf="!hideCopy" class="material-icons copy-button no-print"
        title="Copy code snippet"
        [attr.aria-label]="ariaLabel"
        (click)="doCopy()">
        <span aria-hidden="true">content_copy</span>
      </button>
      <code class="animated fadeIn" #codeContainer></code>
    </pre>
    `
    }),
    __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _pretty_printer_service__WEBPACK_IMPORTED_MODULE_1__["PrettyPrinter"],
        _shared_copier_service__WEBPACK_IMPORTED_MODULE_4__["CopierService"],
        _shared_logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"]])
], CodeComponent);

function leftAlign(text) {
    let indent = Number.MAX_VALUE;
    const lines = text.split('\n');
    lines.forEach(line => {
        const lineIndent = line.search(/\S/);
        if (lineIndent !== -1) {
            indent = Math.min(lineIndent, indent);
        }
    });
    return lines.map(line => line.substr(indent)).join('\n').trim();
}


/***/ }),

/***/ "BUJu":
/*!***********************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/api/api-demo/api-demo.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApiDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDemoComponent", function() { return ApiDemoComponent; });
/* harmony import */ var _raw_loader_api_demo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./api-demo.component.html */ "RZQe");
/* harmony import */ var _api_demo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-demo.component.scss */ "9Ror");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ApiDemoComponent = class ApiDemoComponent {
    constructor() {
        this.options = {};
        this.nodes = [
            {
                name: 'root1',
                children: [
                    {
                        name: 'child1'
                    }, {
                        name: 'child2'
                    }
                ]
            },
            {
                name: 'root2',
                children: [
                    {
                        name: 'child2.1'
                    }, {
                        name: 'child2.2',
                        children: [
                            {
                                id: 1001,
                                name: 'subsub'
                            }
                        ]
                    }
                ]
            }
        ];
    }
    addNode(tree) {
        this.nodes[0].children.push({
            name: 'a new child'
        });
        tree.treeModel.update();
    }
    activateSubSub(tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    }
    activeNodes(treeModel) {
        console.log(treeModel.activeNodes);
    }
};
ApiDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-api-demo',
        template: _raw_loader_api_demo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_api_demo_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], ApiDemoComponent);



/***/ }),

/***/ "Bs0Y":
/*!*********************************************************!*\
  !*** ./projects/docs-app/src/app/app-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "ZmsY");
/* harmony import */ var _examples_basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/basic-usage/basic-usage.component */ "+6E/");
/* harmony import */ var _fundamentals_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fundamentals/nodes/nodes.component */ "bJ/M");
/* harmony import */ var _fundamentals_options_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fundamentals/options/options.component */ "RyCE");
/* harmony import */ var _fundamentals_actions_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fundamentals/actions/actions.component */ "x/Xv");
/* harmony import */ var _fundamentals_templates_templates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fundamentals/templates/templates.component */ "heiO");
/* harmony import */ var _fundamentals_events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fundamentals/events/events.component */ "4CxF");
/* harmony import */ var _fundamentals_state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fundamentals/state-binding/state-binding.component */ "Ptc1");
/* harmony import */ var _fundamentals_api_api_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fundamentals/api/api.component */ "AY8m");
/* harmony import */ var _fundamentals_styling_styling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fundamentals/styling/styling.component */ "x2C+");
/* harmony import */ var _fundamentals_focus_focus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fundamentals/focus/focus.component */ "5ic2");
/* harmony import */ var _fundamentals_issues_issues_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fundamentals/issues/issues.component */ "zbqq");
/* harmony import */ var _examples_columns_example_columns_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/columns-example/columns-example.component */ "8CB6");
/* harmony import */ var _examples_crud_example_crud_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/crud-example/crud-example.component */ "lQNf");
/* harmony import */ var _examples_load_more_example_load_more_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/load-more-example/load-more-example.component */ "qEib");
/* harmony import */ var _guides_async_guide_async_guide_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guides/async-guide/async-guide.component */ "hjlW");
/* harmony import */ var _guides_filter_guide_filter_guide_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guides/filter-guide/filter-guide.component */ "zYED");
/* harmony import */ var _guides_update_guide_update_guide_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guides/update-guide/update-guide.component */ "eH7g");
/* harmony import */ var _guides_drag_drop_guide_drag_drop_guide_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guides/drag-drop-guide/drag-drop-guide.component */ "1AU6");
/* harmony import */ var _guides_checkboxes_guide_checkboxes_guide_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guides/checkboxes-guide/checkboxes-guide.component */ "OzNO");
/* harmony import */ var _guides_large_tree_guide_large_tree_guide_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guides/large-tree-guide/large-tree-guide.component */ "H8kz");
/* harmony import */ var _guides_redux_guide_redux_guide_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guides/redux-guide/redux-guide.component */ "V4S9");
/* harmony import */ var _guides_rtl_guide_rtl_guide_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./guides/rtl-guide/rtl-guide.component */ "WlIa");
/* harmony import */ var _guides_custom_fields_guide_custom_fields_guide_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guides/custom-fields-guide/custom-fields-guide.component */ "Dak6");
/* harmony import */ var _guides_expanding_guide_expanding_guide_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guides/expanding-guide/expanding-guide.component */ "qkpM");
/* harmony import */ var _guides_auto_scroll_guide_auto_scroll_guide_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guides/auto-scroll-guide/auto-scroll-guide.component */ "pUSG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























const routes = [
    {
        path: '',
        component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__["GettingStartedComponent"],
        pathMatch: 'full',
    },
    {
        path: 'examples',
        children: [
            { path: 'basic', component: _examples_basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_3__["BasicUsageComponent"] },
            { path: 'columns', component: _examples_columns_example_columns_example_component__WEBPACK_IMPORTED_MODULE_14__["ColumnsExampleComponent"] },
            { path: 'crud', component: _examples_crud_example_crud_example_component__WEBPACK_IMPORTED_MODULE_15__["CrudExampleComponent"] },
            { path: 'loadmore', component: _examples_load_more_example_load_more_example_component__WEBPACK_IMPORTED_MODULE_16__["LoadMoreExampleComponent"] },
        ]
    },
    {
        path: 'guides',
        children: [
            { path: 'async', component: _guides_async_guide_async_guide_component__WEBPACK_IMPORTED_MODULE_17__["AsyncGuideComponent"] },
            { path: 'filter', component: _guides_filter_guide_filter_guide_component__WEBPACK_IMPORTED_MODULE_18__["FilterGuideComponent"] },
            { path: 'update', component: _guides_update_guide_update_guide_component__WEBPACK_IMPORTED_MODULE_19__["UpdateGuideComponent"] },
            { path: 'dragdrop', component: _guides_drag_drop_guide_drag_drop_guide_component__WEBPACK_IMPORTED_MODULE_20__["DragDropGuideComponent"] },
            { path: 'checkboxes', component: _guides_checkboxes_guide_checkboxes_guide_component__WEBPACK_IMPORTED_MODULE_21__["CheckboxesGuideComponent"] },
            { path: 'largetree', component: _guides_large_tree_guide_large_tree_guide_component__WEBPACK_IMPORTED_MODULE_22__["LargeTreeGuideComponent"] },
            { path: 'redux', component: _guides_redux_guide_redux_guide_component__WEBPACK_IMPORTED_MODULE_23__["ReduxGuideComponent"] },
            { path: 'rtl', component: _guides_rtl_guide_rtl_guide_component__WEBPACK_IMPORTED_MODULE_24__["RtlGuideComponent"] },
            { path: 'customfields', component: _guides_custom_fields_guide_custom_fields_guide_component__WEBPACK_IMPORTED_MODULE_25__["CustomFieldsGuideComponent"] },
            { path: 'expanding', component: _guides_expanding_guide_expanding_guide_component__WEBPACK_IMPORTED_MODULE_26__["ExpandingGuideComponent"] },
            { path: 'autoscroll', component: _guides_auto_scroll_guide_auto_scroll_guide_component__WEBPACK_IMPORTED_MODULE_27__["AutoScrollGuideComponent"] },
        ]
    },
    {
        path: 'fundamentals',
        children: [
            { path: 'nodes', component: _fundamentals_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_4__["NodesComponent"] },
            { path: 'options', component: _fundamentals_options_options_component__WEBPACK_IMPORTED_MODULE_5__["OptionsComponent"] },
            { path: 'actions', component: _fundamentals_actions_actions_component__WEBPACK_IMPORTED_MODULE_6__["ActionsComponent"] },
            { path: 'templates', component: _fundamentals_templates_templates_component__WEBPACK_IMPORTED_MODULE_7__["TemplatesComponent"] },
            { path: 'events', component: _fundamentals_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"] },
            { path: 'state', component: _fundamentals_state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_9__["StateBindingComponent"] },
            { path: 'api', component: _fundamentals_api_api_component__WEBPACK_IMPORTED_MODULE_10__["ApiComponent"] },
            { path: 'styling', component: _fundamentals_styling_styling_component__WEBPACK_IMPORTED_MODULE_11__["StylingComponent"] },
            { path: 'focus', component: _fundamentals_focus_focus_component__WEBPACK_IMPORTED_MODULE_12__["FocusComponent"] },
            { path: 'issues', component: _fundamentals_issues_issues_component__WEBPACK_IMPORTED_MODULE_13__["IssuesComponent"] },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'legacy'
            }),
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "CL1O":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/examples/load-more-example/load-more/load-more.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 500px; overflow: hidden;\">\r\n  <tree-root\r\n    #tree\r\n    [nodes]=\"nodes\"\r\n    [options]=\"options\"\r\n    [focused]=\"true\">\r\n  </tree-root>\r\n</div>\r\n");

/***/ }),

/***/ "CVsQ":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/actions/actions.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Customize Actions</h1>\r\n\r\n<h2>Demo</h2>\r\n\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/fundamentals/actions/actions-demo/actions-demo.component.ts\" target=\"_blank\">Source Code</a></p>\r\n\r\n<div class=\"demo-container\">\r\n    <app-actions-demo></app-actions-demo>\r\n</div>\r\n\r\n<h2>Override key and mouse actions</h2>\r\n\r\n<p>Angular Tree Component comes with a default mapping of mouse events and key events to actions. For example - click on the node activates / deactivates it, click on the expander expands / collapses it, pressing space or enter will toggle the node activation (same as click), etc.</p>\r\n<p>Using the <code>actionMapping</code> option, you can override how the tree reacts to mouse and key events, by providing a custom mapping.</p>\r\n\r\n<code-example>{{ actionMapping }}</code-example>\r\n\r\n\r\n<h2>actionMapping (IActionMapping)</h2>\r\n\r\n<p>The <code>actionMapping</code> attribute needs to implement the <code>IActionMapping</code> interface, which is an object that maps predefined mouse events, and key codes, to callbacks.</p>\r\n\r\n\r\n<h2>The callback (IActionHandler)</h2>\r\n\r\n<p>The callback always receives three parameters: <code>TreeModel</code>, <code>TreeNode</code>, and <code>$event</code>.</p>\r\n\r\n\r\n<h2>TREE_ACTIONS</h2>\r\n\r\n<p>Notice the <code>TREE_ACTIONS</code> object. It holds predefined callbacks that do common actions.</p>\r\n<p>The available attributes are:</p>\r\n\r\n<ul>\r\n    <li><code>TOGGLE_ACTIVE</code></li>\r\n    <li><code>TOGGLE_ACTIVE_MULTI</code></li>\r\n    <li><code>ACTIVATE</code></li>\r\n    <li><code>DEACTIVATE</code></li>\r\n    <li><code>TOGGLE_SELECTED</code></li>\r\n    <li><code>SELECT</code></li>\r\n    <li><code>DESELECT</code></li>\r\n    <li><code>FOCUS</code></li>\r\n    <li><code>TOGGLE_EXPANDED</code></li>\r\n    <li><code>EXPAND</code></li>\r\n    <li><code>COLLAPSE</code></li>\r\n    <li><code>DRILL_DOWN</code></li>\r\n    <li><code>DRILL_UP</code></li>\r\n    <li><code>NEXT_NODE</code></li>\r\n    <li><code>PREVIOUS_NODE</code></li>\r\n    <li><code>MOVE_NODE</code></li>\r\n</ul>\r\n\r\n\r\n<h2>Mouse actions</h2>\r\n\r\n<p>In mouse actions, the <code>TreeNode</code> parameter of the callback is the node that the event was activated on (e.g. clicked on).</p>\r\n<p>The possible attributes for <code>actionMapping.mouse</code> are:</p>\r\n\r\n<ul>\r\n    <li><code>click</code></li>\r\n    <li><code>dblClick</code></li>\r\n    <li><code>expanderClick</code></li>\r\n    <li><code>checkboxClick</code></li>\r\n    <li><code>contextMenu</code> (right click)</li>\r\n    <li><code>dragStart</code></li>\r\n    <li><code>drag</code></li>\r\n    <li><code>dragOver</code></li>\r\n    <li><code>dragEnd</code></li>\r\n    <li><code>dragLeave</code></li>\r\n    <li><code>dragEnter</code></li>\r\n    <li><code>drop</code></li>\r\n</ul>\r\n\r\n<code-example>{{ mouseActions }}</code-example>\r\n\r\n\r\n<h2>Shift+Click (Alt / Ctrl)</h2>\r\n\r\n<p>If you want to perform actions based on modifier keys, use <code>$event.shiftKey</code>, <code>$event.ctrlKey</code> etc., provided on the third callback argument - <code>$event</code>.</p>\r\n\r\n\r\n<h2>Keyboard events</h2>\r\n\r\n<p>In keyboard events, the <code>TreeNode</code> parameter of the callback is the currently focused node. In case no node is focused, this will be <code>null</code>.</p>\r\n<p>The attributes for <code>actionMapping.keys</code> are integers which represent the key code (e.g. 32 for Space)</p>\r\n<p>Angular Tree Component exposes a <code>KEYS</code> constant with predefined common key codes:</p>\r\n\r\n<code-example language=\"json\">{{ keys }}</code-example>\r\n\r\n<p>So you can use those, or pass any keycode you'd like.</p>\r\n<p>For example:</p>\r\n\r\n<code-example>{{ keysExample }}</code-example>\r\n\r\n\r\n<h2>Default mapping</h2>\r\n\r\n<p>Here is the default mapping that ships with Angular Tree Component:</p>\r\n\r\n<code-example>{{ defaultMapping }}</code-example>\r\n\r\n\r\n<h2>Context menu</h2>\r\n\r\n<p>In case you want to open your own context menu, you must first run <code>$event.preventDefault()</code> within the callback.</p>\r\n");

/***/ }),

/***/ "CzPr":
/*!***************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/nodes/nodes.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub2Rlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "DF1i":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/async-guide/async-guide.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Async Data</h1>\r\n\r\n<p>\r\n  The tree allows to load children asynchronously using <code>getChildren</code> option, and <code>hasChildren</code> field on the node.\r\n</p>\r\n\r\n<h2>Demo</h2>\r\n\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/guides/async-guide/async/async.component.ts\" target=\"_blank\">Source Code</a></p>\r\n\r\n<div class=\"demo-container\">\r\n  <app-async></app-async>\r\n</div>\r\n\r\n<h2>'getChildren' option</h2>\r\n\r\n<p>This options receives a function that has a TreeNode parameter, and returns a value or a promise that resolves to the node's children:</p>\r\n\r\n<code-example>(node:TreeNode) => TreeNode[] | Promise&lt;TreeNode[]&gt;</code-example>\r\n\r\n<p>\r\n  The function will be called whenever a node is expanded, the <code>hasChildren</code> field is true, and the <code>children</code> field is empty.\r\n  The result will be loaded into the node's children attribute.\r\n</p>\r\n\r\n<h2>Example</h2>\r\n\r\n<code-example>{{ javascript }}</code-example>\r\n");

/***/ }),

/***/ "DKwI":
/*!**********************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/crud-example/crud/crud.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tree-node-content {\n  display: flex;\n  justify-content: space-between;\n}\n.tree-node-content button {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjcnVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY3J1ZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVlLW5vZGUtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "DU1v":
/*!*******************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/columns-example/columns/columns.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".base-tree-container {\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n.base-tree-container .tree-header {\n  display: flex;\n  margin-left: -10px;\n  padding: 2px 5px 0 28px;\n  height: 38px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.base-tree-container .tree-header .tree-column {\n  color: #6E6E6E;\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 500;\n  align-items: center;\n}\n.base-tree-container .tree-wrapper {\n  flex: 1;\n  max-height: calc(80vh - 0.2rem);\n}\n.base-tree-container .tree-node-wrapper {\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem;\n  padding-left: 0.2rem;\n  display: flex;\n  flex-direction: row;\n}\n.base-tree-container .node-content-wrapper {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  flex: 1;\n  margin-right: 0.25rem;\n}\n.base-tree-container .tree-header {\n  width: 98% !important;\n}\n.base-tree-container .tree-column-wrapper, .base-tree-container .tree-header {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.base-tree-container .tree-column-wrapper span, .base-tree-container .tree-header span {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.base-tree-container .tree-column-wrapper .tree-column, .base-tree-container .tree-header .tree-column {\n  flex-grow: 1;\n  display: flex;\n  padding-left: 5px;\n  padding-right: 5px;\n  align-items: center;\n}\n.base-tree-container .tree-column-wrapper .tree-column:first-child, .base-tree-container .tree-header .tree-column:first-child {\n  overflow: hidden;\n  margin-right: auto;\n  flex-shrink: 1;\n  min-width: 0;\n}\n.base-tree-container .tree-column-wrapper .tree-column:first-child span, .base-tree-container .tree-header .tree-column:first-child span {\n  white-space: initial;\n}\n.base-tree-container .tree-column-wrapper .tree-column:not(:first-child), .base-tree-container .tree-header .tree-column:not(:first-child) {\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 250px;\n}\n@media (max-width: 1439px) {\n  .base-tree-container .tree-column-wrapper .tree-column:not(:first-child), .base-tree-container .tree-header .tree-column:not(:first-child) {\n    width: 160px;\n  }\n}\n@media (max-width: 1299px) {\n  .base-tree-container .tree-column-wrapper .tree-column:not(:first-child), .base-tree-container .tree-header .tree-column:not(:first-child) {\n    width: 85px !important;\n  }\n}\n@media (max-width: 768px) {\n  .base-tree-container .tree-column-wrapper .tree-column:not(:first-child), .base-tree-container .tree-header .tree-column:not(:first-child) {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjb2x1bW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtBQVBKO0FBU0k7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBOO0FBV0U7RUFDRSxPQUFBO0VBQ0EsK0JBQUE7QUFUSjtBQVlFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVko7QUFhRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0FBWEo7QUFjRTtFQUNFLHFCQUFBO0FBWko7QUFlRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFiSjtBQWVJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBYk47QUFnQkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWROO0FBZ0JNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBZFI7QUFnQlE7RUFDRSxvQkFBQTtBQWRWO0FBa0JNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBaEJSO0FBa0JRO0VBTEY7SUFNSSxZQUFBO0VBZlI7QUFDRjtBQWlCUTtFQVRGO0lBVUksc0JBQUE7RUFkUjtBQUNGO0FBZ0JRO0VBYkY7SUFjSSx3QkFBQTtFQWJSO0FBQ0YiLCJmaWxlIjoiY29sdW1ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NnB4LFxyXG4gIG1kOiA3NjhweCxcclxuICBsZzogOTkycHgsXHJcbiAgeGw6IDEzMDBweFxyXG4pO1xyXG5cclxuLmJhc2UtdHJlZS1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnRyZWUtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4IDAgMjhweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuICAgIC50cmVlLWNvbHVtbiB7XHJcbiAgICAgIGNvbG9yOiAjNkU2RTZFO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudHJlZS13cmFwcGVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDgwdmggLSAwLjJyZW0pO1xyXG4gIH1cclxuXHJcbiAgLnRyZWUtbm9kZS13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5ub2RlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRyZWUtaGVhZGVyIHtcclxuICAgIHdpZHRoOiA5OCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50cmVlLWNvbHVtbi13cmFwcGVyLCAudHJlZS1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyZWUtY29sdW1uIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgbWluLXdpZHRoOiAwO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuXHJcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogMTQ0MHB4IC0gMXB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCB4bCkgLSAxcHgpIHtcclxuICAgICAgICAgIHdpZHRoOiA4NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "DW/B":
/*!*******************************************************************************!*\
  !*** ./projects/docs-app/src/app/custom-elements/code/code-example.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CodeExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExampleModule", function() { return CodeExampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _code_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-example.component */ "zqmm");
/* harmony import */ var _code_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code.module */ "49vC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let CodeExampleModule = class CodeExampleModule {
    constructor() {
        this.customElementComponent = _code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"];
    }
};
CodeExampleModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]],
        declarations: [_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"]],
        exports: [_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"]],
        entryComponents: [_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"]]
    })
], CodeExampleModule);



/***/ }),

/***/ "Dak6":
/*!***********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/custom-fields-guide/custom-fields-guide.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CustomFieldsGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsGuideComponent", function() { return CustomFieldsGuideComponent; });
/* harmony import */ var _raw_loader_custom_fields_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./custom-fields-guide.component.html */ "AMcD");
/* harmony import */ var _custom_fields_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-fields-guide.component.scss */ "7WUN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CustomFieldsGuideComponent = class CustomFieldsGuideComponent {
    constructor() {
        this.javascript = `
nodes = [
  {
    _id: '1',
    title: 'root1',
    nodes: [{_id: '3', title: 'child1'}]
  },
  {
    _id: '2',
    title: 'root2'
  }
];

options: ITreeOptions = {
  idField: '_id',
  displayField: 'title',
  childrenField: 'nodes'
};`;
    }
};
CustomFieldsGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-custom-fields-guide',
        template: _raw_loader_custom_fields_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_custom_fields_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], CustomFieldsGuideComponent);



/***/ }),

/***/ "E6d+":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/actions/actions-demo/actions-demo.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tree-root\r\n  #tree\r\n  [nodes]=\"nodes\"\r\n  [options]=\"options\"\r\n  [focused]=\"true\"\r\n>\r\n</tree-root>\r\n<br>\r\n<b>Custom Keys:</b><br>\r\nenter - show alert<br>\r\n<br>\r\n<b>Custom Mouse Actions:</b><br>\r\nshift+click - select multi<br>\r\ndouble click - expand / collapse<br>\r\nright-click - show alert\r\n");

/***/ }),

/***/ "EjZu":
/*!********************************************************************************!*\
  !*** ./dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js ***!
  \********************************************************************************/
/*! exports provided: KEYS, LoadingComponent, TREE_ACTIONS, TreeAnimateOpenDirective, TreeComponent, TreeDragDirective, TreeDraggedElement, TreeDropDirective, TreeModel, TreeModule, TreeNode, TreeNodeCheckboxComponent, TreeNodeChildrenComponent, TreeNodeCollectionComponent, TreeNodeComponent, TreeNodeContent, TreeNodeDropSlot, TreeNodeExpanderComponent, TreeNodeWrapperComponent, TreeViewportComponent, TreeVirtualScroll, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_ACTIONS", function() { return TREE_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeAnimateOpenDirective", function() { return TreeAnimateOpenDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDragDirective", function() { return TreeDragDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDraggedElement", function() { return TreeDraggedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDropDirective", function() { return TreeDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return TreeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return TreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeCheckboxComponent", function() { return TreeNodeCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeChildrenComponent", function() { return TreeNodeChildrenComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeCollectionComponent", function() { return TreeNodeCollectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeComponent", function() { return TreeNodeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeContent", function() { return TreeNodeContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeDropSlot", function() { return TreeNodeDropSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeExpanderComponent", function() { return TreeNodeExpanderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeWrapperComponent", function() { return TreeNodeWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewportComponent", function() { return TreeViewportComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeVirtualScroll", function() { return TreeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return actionInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TreeMobxAutorunDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "2vnA");




class TreeMobxAutorunDirective {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.templateBindings = {};
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef);
        if (this.dispose) {
            this.dispose();
        }
        if (this.shouldDetach()) {
            this.view.detach();
        }
        this.autoDetect(this.view);
    }
    shouldDetach() {
        return this.treeMobxAutorun && this.treeMobxAutorun.detach;
    }
    autoDetect(view) {
        this.dispose = Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])(() => view.detectChanges());
    }
    ngOnDestroy() {
        if (this.dispose) {
            this.dispose();
        }
    }
}
TreeMobxAutorunDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[treeMobxAutorun]' },] }
];
/** @nocollapse */
TreeMobxAutorunDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
TreeMobxAutorunDirective.propDecorators = {
    treeMobxAutorun: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

const KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    SPACE: 32,
    CONTEXT_MENU: 32
};

const ɵ0 = (tree, node, $event) => node && node.toggleActivated(), ɵ1 = (tree, node, $event) => node && node.toggleActivated(true), ɵ2 = (tree, node, $event) => node && node.toggleSelected(), ɵ3 = (tree, node, $event) => node.setIsActive(true), ɵ4 = (tree, node, $event) => node.setIsActive(false), ɵ5 = (tree, node, $event) => node.setIsSelected(true), ɵ6 = (tree, node, $event) => node.setIsSelected(false), ɵ7 = (tree, node, $event) => node.focus(), ɵ8 = (tree, node, $event) => node.hasChildren && node.toggleExpanded(), ɵ9 = (tree, node, $event) => node.expand(), ɵ10 = (tree, node, $event) => node.collapse(), ɵ11 = (tree, node, $event) => tree.focusDrillDown(), ɵ12 = (tree, node, $event) => tree.focusDrillUp(), ɵ13 = (tree, node, $event) => tree.focusNextNode(), ɵ14 = (tree, node, $event) => tree.focusPreviousNode(), ɵ15 = (tree, node, $event, { from, to }) => {
    // default action assumes from = node, to = {parent, index}
    if ($event.ctrlKey) {
        tree.copyNode(from, to);
    }
    else {
        tree.moveNode(from, to);
    }
};
const TREE_ACTIONS = {
    TOGGLE_ACTIVE: ɵ0,
    TOGGLE_ACTIVE_MULTI: ɵ1,
    TOGGLE_SELECTED: ɵ2,
    ACTIVATE: ɵ3,
    DEACTIVATE: ɵ4,
    SELECT: ɵ5,
    DESELECT: ɵ6,
    FOCUS: ɵ7,
    TOGGLE_EXPANDED: ɵ8,
    EXPAND: ɵ9,
    COLLAPSE: ɵ10,
    DRILL_DOWN: ɵ11,
    DRILL_UP: ɵ12,
    NEXT_NODE: ɵ13,
    PREVIOUS_NODE: ɵ14,
    MOVE_NODE: ɵ15
};
const defaultActionMapping = {
    mouse: {
        click: TREE_ACTIONS.TOGGLE_ACTIVE,
        dblClick: null,
        contextMenu: null,
        expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
        checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,
        drop: TREE_ACTIONS.MOVE_NODE
    },
    keys: {
        [KEYS.RIGHT]: TREE_ACTIONS.DRILL_DOWN,
        [KEYS.LEFT]: TREE_ACTIONS.DRILL_UP,
        [KEYS.DOWN]: TREE_ACTIONS.NEXT_NODE,
        [KEYS.UP]: TREE_ACTIONS.PREVIOUS_NODE,
        [KEYS.SPACE]: TREE_ACTIONS.TOGGLE_ACTIVE,
        [KEYS.ENTER]: TREE_ACTIONS.TOGGLE_ACTIVE
    }
};
class TreeOptions {
    constructor(options = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35;
        this.options = options;
        this.actionMapping = {
            mouse: {
                click: (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.actionMapping) === null || _b === void 0 ? void 0 : _b.mouse) === null || _c === void 0 ? void 0 : _c.click) !== null && _d !== void 0 ? _d : defaultActionMapping.mouse.click,
                dblClick: (_h = (_g = (_f = (_e = this.options) === null || _e === void 0 ? void 0 : _e.actionMapping) === null || _f === void 0 ? void 0 : _f.mouse) === null || _g === void 0 ? void 0 : _g.dblClick) !== null && _h !== void 0 ? _h : defaultActionMapping.mouse.dblClick,
                contextMenu: (_m = (_l = (_k = (_j = this.options) === null || _j === void 0 ? void 0 : _j.actionMapping) === null || _k === void 0 ? void 0 : _k.mouse) === null || _l === void 0 ? void 0 : _l.contextMenu) !== null && _m !== void 0 ? _m : defaultActionMapping.mouse.contextMenu,
                expanderClick: (_r = (_q = (_p = (_o = this.options) === null || _o === void 0 ? void 0 : _o.actionMapping) === null || _p === void 0 ? void 0 : _p.mouse) === null || _q === void 0 ? void 0 : _q.expanderClick) !== null && _r !== void 0 ? _r : defaultActionMapping.mouse.expanderClick,
                checkboxClick: (_v = (_u = (_t = (_s = this.options) === null || _s === void 0 ? void 0 : _s.actionMapping) === null || _t === void 0 ? void 0 : _t.mouse) === null || _u === void 0 ? void 0 : _u.checkboxClick) !== null && _v !== void 0 ? _v : defaultActionMapping.mouse.checkboxClick,
                drop: (_z = (_y = (_x = (_w = this.options) === null || _w === void 0 ? void 0 : _w.actionMapping) === null || _x === void 0 ? void 0 : _x.mouse) === null || _y === void 0 ? void 0 : _y.drop) !== null && _z !== void 0 ? _z : defaultActionMapping.mouse.drop,
                dragStart: (_3 = (_2 = (_1 = (_0 = this.options) === null || _0 === void 0 ? void 0 : _0.actionMapping) === null || _1 === void 0 ? void 0 : _1.mouse) === null || _2 === void 0 ? void 0 : _2.dragStart) !== null && _3 !== void 0 ? _3 : undefined,
                drag: (_7 = (_6 = (_5 = (_4 = this.options) === null || _4 === void 0 ? void 0 : _4.actionMapping) === null || _5 === void 0 ? void 0 : _5.mouse) === null || _6 === void 0 ? void 0 : _6.drag) !== null && _7 !== void 0 ? _7 : undefined,
                dragEnd: (_11 = (_10 = (_9 = (_8 = this.options) === null || _8 === void 0 ? void 0 : _8.actionMapping) === null || _9 === void 0 ? void 0 : _9.mouse) === null || _10 === void 0 ? void 0 : _10.dragEnd) !== null && _11 !== void 0 ? _11 : undefined,
                dragOver: (_15 = (_14 = (_13 = (_12 = this.options) === null || _12 === void 0 ? void 0 : _12.actionMapping) === null || _13 === void 0 ? void 0 : _13.mouse) === null || _14 === void 0 ? void 0 : _14.dragOver) !== null && _15 !== void 0 ? _15 : undefined,
                dragLeave: (_19 = (_18 = (_17 = (_16 = this.options) === null || _16 === void 0 ? void 0 : _16.actionMapping) === null || _17 === void 0 ? void 0 : _17.mouse) === null || _18 === void 0 ? void 0 : _18.dragLeave) !== null && _19 !== void 0 ? _19 : undefined,
                dragEnter: (_23 = (_22 = (_21 = (_20 = this.options) === null || _20 === void 0 ? void 0 : _20.actionMapping) === null || _21 === void 0 ? void 0 : _21.mouse) === null || _22 === void 0 ? void 0 : _22.dragEnter) !== null && _23 !== void 0 ? _23 : undefined,
                mouseOver: (_27 = (_26 = (_25 = (_24 = this.options) === null || _24 === void 0 ? void 0 : _24.actionMapping) === null || _25 === void 0 ? void 0 : _25.mouse) === null || _26 === void 0 ? void 0 : _26.mouseOver) !== null && _27 !== void 0 ? _27 : undefined,
                mouseOut: (_31 = (_30 = (_29 = (_28 = this.options) === null || _28 === void 0 ? void 0 : _28.actionMapping) === null || _29 === void 0 ? void 0 : _29.mouse) === null || _30 === void 0 ? void 0 : _30.mouseOut) !== null && _31 !== void 0 ? _31 : undefined,
            },
            keys: {
                [KEYS.RIGHT]: TREE_ACTIONS.DRILL_DOWN,
                [KEYS.LEFT]: TREE_ACTIONS.DRILL_UP,
                [KEYS.DOWN]: TREE_ACTIONS.NEXT_NODE,
                [KEYS.UP]: TREE_ACTIONS.PREVIOUS_NODE,
                [KEYS.SPACE]: TREE_ACTIONS.TOGGLE_ACTIVE,
                [KEYS.ENTER]: TREE_ACTIONS.TOGGLE_ACTIVE
            }
        };
        if ((_33 = (_32 = this.options) === null || _32 === void 0 ? void 0 : _32.actionMapping) === null || _33 === void 0 ? void 0 : _33.keys) {
            this.actionMapping.keys = Object.assign(Object.assign({}, this.actionMapping.keys), this.options.actionMapping.keys);
        }
        if (options.rtl) {
            this.actionMapping.keys[KEYS.RIGHT] = ((_34 = options.actionMapping) === null || _34 === void 0 ? void 0 : _34.keys[KEYS.RIGHT]) || TREE_ACTIONS.DRILL_UP;
            this.actionMapping.keys[KEYS.LEFT] = ((_35 = options.actionMapping) === null || _35 === void 0 ? void 0 : _35.keys[KEYS.LEFT]) || TREE_ACTIONS.DRILL_DOWN;
        }
    }
    get hasChildrenField() { return this.options.hasChildrenField || 'hasChildren'; }
    get childrenField() { return this.options.childrenField || 'children'; }
    get displayField() { return this.options.displayField || 'name'; }
    get idField() { return this.options.idField || 'id'; }
    get isExpandedField() { return this.options.isExpandedField || 'isExpanded'; }
    get getChildren() { return this.options.getChildren; }
    get levelPadding() { return this.options.levelPadding || 0; }
    get useVirtualScroll() { return this.options.useVirtualScroll; }
    get animateExpand() { return this.options.animateExpand; }
    get animateSpeed() { return this.options.animateSpeed || 1; }
    get animateAcceleration() { return this.options.animateAcceleration || 1.2; }
    get scrollOnActivate() { return this.options.scrollOnActivate === undefined ? true : this.options.scrollOnActivate; }
    get rtl() { return !!this.options.rtl; }
    get rootId() { return this.options.rootId; }
    get useCheckbox() { return this.options.useCheckbox; }
    get useTriState() { return this.options.useTriState === undefined ? true : this.options.useTriState; }
    get scrollContainer() { return this.options.scrollContainer; }
    get allowDragoverStyling() { return this.options.allowDragoverStyling === undefined ? true : this.options.allowDragoverStyling; }
    getNodeClone(node) {
        if (this.options.getNodeClone) {
            return this.options.getNodeClone(node);
        }
        // remove id from clone
        // keeping ie11 compatibility
        const nodeClone = Object.assign({}, node.data);
        if (nodeClone.id) {
            delete nodeClone.id;
        }
        return nodeClone;
    }
    allowDrop(element, to, $event) {
        if (this.options.allowDrop instanceof Function) {
            return this.options.allowDrop(element, to, $event);
        }
        else {
            return this.options.allowDrop === undefined ? true : this.options.allowDrop;
        }
    }
    allowDrag(node) {
        if (this.options.allowDrag instanceof Function) {
            return this.options.allowDrag(node);
        }
        else {
            return this.options.allowDrag;
        }
    }
    nodeClass(node) {
        return this.options.nodeClass ? this.options.nodeClass(node) : '';
    }
    nodeHeight(node) {
        if (node.data.virtual) {
            return 0;
        }
        let nodeHeight = this.options.nodeHeight || 22;
        if (typeof nodeHeight === 'function') {
            nodeHeight = nodeHeight(node);
        }
        // account for drop slots:
        return nodeHeight + (node.index === 0 ? 2 : 1) * this.dropSlotHeight;
    }
    get dropSlotHeight() {
        return typeof this.options.dropSlotHeight === 'number' ? this.options.dropSlotHeight : 2;
    }
}

const TREE_EVENTS = {
    toggleExpanded: 'toggleExpanded',
    activate: 'activate',
    deactivate: 'deactivate',
    nodeActivate: 'nodeActivate',
    nodeDeactivate: 'nodeDeactivate',
    select: 'select',
    deselect: 'deselect',
    focus: 'focus',
    blur: 'blur',
    initialized: 'initialized',
    updateData: 'updateData',
    moveNode: 'moveNode',
    copyNode: 'copyNode',
    event: 'event',
    loadNodeChildren: 'loadNodeChildren',
    changeFilter: 'changeFilter',
    stateChange: 'stateChange'
};

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class TreeNode {
    constructor(data, parent, treeModel, index) {
        this.data = data;
        this.parent = parent;
        this.treeModel = treeModel;
        this.position = 0;
        this.allowDrop = (element, $event) => {
            return this.options.allowDrop(element, { parent: this, index: 0 }, $event);
        };
        this.allowDragoverStyling = () => {
            return this.options.allowDragoverStyling;
        };
        if (this.id === undefined || this.id === null) {
            this.id = uuid();
        } // Make sure there's a unique id without overriding existing ids to work with immutable data structures
        this.index = index;
        if (this.getField('children')) {
            this._initChildren();
        }
        this.autoLoadChildren();
    }
    get isHidden() { return this.treeModel.isHidden(this); }
    ;
    get isExpanded() { return this.treeModel.isExpanded(this); }
    ;
    get isActive() { return this.treeModel.isActive(this); }
    ;
    get isFocused() { return this.treeModel.isNodeFocused(this); }
    ;
    get isSelected() {
        if (this.isSelectable()) {
            return this.treeModel.isSelected(this);
        }
        else {
            return this.children.some((node) => node.isSelected);
        }
    }
    ;
    get isAllSelected() {
        if (this.isSelectable()) {
            return this.treeModel.isSelected(this);
        }
        else {
            return this.children.every((node) => node.isAllSelected);
        }
    }
    ;
    get isPartiallySelected() {
        return this.isSelected && !this.isAllSelected;
    }
    get level() {
        return this.parent ? this.parent.level + 1 : 0;
    }
    get path() {
        return this.parent ? [...this.parent.path, this.id] : [];
    }
    get elementRef() {
        throw `Element Ref is no longer supported since introducing virtual scroll\n
      You may use a template to obtain a reference to the element`;
    }
    get originalNode() { return this._originalNode; }
    ;
    // helper get functions:
    get hasChildren() {
        return !!(this.getField('hasChildren') || (this.children && this.children.length > 0));
    }
    get isCollapsed() { return !this.isExpanded; }
    get isLeaf() { return !this.hasChildren; }
    get isRoot() { return this.parent.data.virtual; }
    get realParent() { return this.isRoot ? null : this.parent; }
    // proxy functions:
    get options() { return this.treeModel.options; }
    fireEvent(event) { this.treeModel.fireEvent(event); }
    // field accessors:
    get displayField() {
        return this.getField('display');
    }
    get id() {
        return this.getField('id');
    }
    set id(value) {
        this.setField('id', value);
    }
    getField(key) {
        return this.data[this.options[`${key}Field`]];
    }
    setField(key, value) {
        this.data[this.options[`${key}Field`]] = value;
    }
    // traversing:
    _findAdjacentSibling(steps, skipHidden = false) {
        const siblings = this._getParentsChildren(skipHidden);
        const index = siblings.indexOf(this);
        return siblings.length > index + steps ? siblings[index + steps] : null;
    }
    findNextSibling(skipHidden = false) {
        return this._findAdjacentSibling(+1, skipHidden);
    }
    findPreviousSibling(skipHidden = false) {
        return this._findAdjacentSibling(-1, skipHidden);
    }
    getVisibleChildren() {
        return this.visibleChildren;
    }
    get visibleChildren() {
        return (this.children || []).filter((node) => !node.isHidden);
    }
    getFirstChild(skipHidden = false) {
        let children = skipHidden ? this.visibleChildren : this.children;
        return children != null && children.length ? children[0] : null;
    }
    getLastChild(skipHidden = false) {
        let children = skipHidden ? this.visibleChildren : this.children;
        return children != null && children.length ? children[children.length - 1] : null;
    }
    findNextNode(goInside = true, skipHidden = false) {
        return goInside && this.isExpanded && this.getFirstChild(skipHidden) ||
            this.findNextSibling(skipHidden) ||
            this.parent && this.parent.findNextNode(false, skipHidden);
    }
    findPreviousNode(skipHidden = false) {
        let previousSibling = this.findPreviousSibling(skipHidden);
        if (!previousSibling) {
            return this.realParent;
        }
        return previousSibling._getLastOpenDescendant(skipHidden);
    }
    _getLastOpenDescendant(skipHidden = false) {
        const lastChild = this.getLastChild(skipHidden);
        return (this.isCollapsed || !lastChild)
            ? this
            : lastChild._getLastOpenDescendant(skipHidden);
    }
    _getParentsChildren(skipHidden = false) {
        const children = this.parent &&
            (skipHidden ? this.parent.getVisibleChildren() : this.parent.children);
        return children || [];
    }
    getIndexInParent(skipHidden = false) {
        return this._getParentsChildren(skipHidden).indexOf(this);
    }
    isDescendantOf(node) {
        if (this === node)
            return true;
        else
            return this.parent && this.parent.isDescendantOf(node);
    }
    getNodePadding() {
        return this.options.levelPadding * (this.level - 1) + 'px';
    }
    getClass() {
        return [this.options.nodeClass(this), `tree-node-level-${this.level}`].join(' ');
    }
    onDrop($event) {
        this.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this, index: 0, dropOnNode: true }
        });
    }
    allowDrag() {
        return this.options.allowDrag(this);
    }
    // helper methods:
    loadNodeChildren() {
        if (!this.options.getChildren) {
            return Promise.resolve(); // Not getChildren method - for using redux
        }
        return Promise.resolve(this.options.getChildren(this))
            .then((children) => {
            if (children) {
                this.setField('children', children);
                this._initChildren();
                if (this.options.useTriState && this.treeModel.isSelected(this)) {
                    this.setIsSelected(true);
                }
                this.children.forEach((child) => {
                    if (child.getField('isExpanded') && child.hasChildren) {
                        child.expand();
                    }
                });
            }
        }).then(() => {
            this.fireEvent({
                eventName: TREE_EVENTS.loadNodeChildren,
                node: this
            });
        });
    }
    expand() {
        if (!this.isExpanded) {
            this.toggleExpanded();
        }
        return this;
    }
    collapse() {
        if (this.isExpanded) {
            this.toggleExpanded();
        }
        return this;
    }
    doForAll(fn) {
        Promise.resolve(fn(this)).then(() => {
            if (this.children) {
                this.children.forEach((child) => child.doForAll(fn));
            }
        });
    }
    expandAll() {
        this.doForAll((node) => node.expand());
    }
    collapseAll() {
        this.doForAll((node) => node.collapse());
    }
    ensureVisible() {
        if (this.realParent) {
            this.realParent.expand();
            this.realParent.ensureVisible();
        }
        return this;
    }
    toggleExpanded() {
        this.setIsExpanded(!this.isExpanded);
        return this;
    }
    setIsExpanded(value) {
        if (this.hasChildren) {
            this.treeModel.setExpandedNode(this, value);
        }
        return this;
    }
    ;
    autoLoadChildren() {
        this.handler =
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(() => this.isExpanded, (isExpanded) => {
                if (!this.children && this.hasChildren && isExpanded) {
                    this.loadNodeChildren();
                }
            }, { fireImmediately: true });
    }
    dispose() {
        if (this.children) {
            this.children.forEach((child) => child.dispose());
        }
        if (this.handler) {
            this.handler();
        }
        this.parent = null;
        this.children = null;
    }
    setIsActive(value, multi = false) {
        this.treeModel.setActiveNode(this, value, multi);
        if (value) {
            this.focus(this.options.scrollOnActivate);
        }
        return this;
    }
    isSelectable() {
        return this.isLeaf || !this.children || !this.options.useTriState;
    }
    setIsSelected(value) {
        if (this.isSelectable()) {
            this.treeModel.setSelectedNode(this, value);
        }
        else {
            this.visibleChildren.forEach((child) => child.setIsSelected(value));
        }
        return this;
    }
    toggleSelected() {
        this.setIsSelected(!this.isSelected);
        return this;
    }
    toggleActivated(multi = false) {
        this.setIsActive(!this.isActive, multi);
        return this;
    }
    setActiveAndVisible(multi = false) {
        this.setIsActive(true, multi)
            .ensureVisible();
        setTimeout(this.scrollIntoView.bind(this));
        return this;
    }
    scrollIntoView(force = false) {
        this.treeModel.virtualScroll.scrollIntoView(this, force);
    }
    focus(scroll = true) {
        let previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(this);
        if (scroll) {
            this.scrollIntoView();
        }
        if (previousNode) {
            this.fireEvent({ eventName: TREE_EVENTS.blur, node: previousNode });
        }
        this.fireEvent({ eventName: TREE_EVENTS.focus, node: this });
        return this;
    }
    blur() {
        let previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(null);
        if (previousNode) {
            this.fireEvent({ eventName: TREE_EVENTS.blur, node: this });
        }
        return this;
    }
    setIsHidden(value) {
        this.treeModel.setIsHidden(this, value);
    }
    hide() {
        this.setIsHidden(true);
    }
    show() {
        this.setIsHidden(false);
    }
    mouseAction(actionName, $event, data = null) {
        this.treeModel.setFocus(true);
        const actionMapping = this.options.actionMapping.mouse;
        const mouseAction = actionMapping[actionName];
        if (mouseAction) {
            mouseAction(this.treeModel, this, $event, data);
        }
    }
    getSelfHeight() {
        return this.options.nodeHeight(this);
    }
    _initChildren() {
        this.children = this.getField('children')
            .map((c, index) => new TreeNode(c, this, this.treeModel, index));
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isHidden", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isExpanded", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isActive", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isFocused", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isSelected", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isAllSelected", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isPartiallySelected", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata("design:type", Array)
], TreeNode.prototype, "children", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata("design:type", Number)
], TreeNode.prototype, "index", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata("design:type", Object)
], TreeNode.prototype, "position", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata("design:type", Number)
], TreeNode.prototype, "height", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "level", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "path", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "visibleChildren", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeNode.prototype, "setIsSelected", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeNode.prototype, "_initChildren", null);
function uuid() {
    return Math.floor(Math.random() * 10000000000000);
}

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class TreeModel {
    constructor() {
        this.options = new TreeOptions();
        this.eventNames = Object.keys(TREE_EVENTS);
        this.expandedNodeIds = {};
        this.selectedLeafNodeIds = {};
        this.activeNodeIds = {};
        this.hiddenNodeIds = {};
        this.focusedNodeId = null;
        this.firstUpdate = true;
        this.subscriptions = [];
    }
    // events
    fireEvent(event) {
        event.treeModel = this;
        this.events[event.eventName].emit(event);
        this.events.event.emit(event);
    }
    subscribe(eventName, fn) {
        const subscription = this.events[eventName].subscribe(fn);
        this.subscriptions.push(subscription);
    }
    // getters
    getFocusedNode() {
        return this.focusedNode;
    }
    getActiveNode() {
        return this.activeNodes[0];
    }
    getActiveNodes() {
        return this.activeNodes;
    }
    getVisibleRoots() {
        return this.virtualRoot.visibleChildren;
    }
    getFirstRoot(skipHidden = false) {
        const root = skipHidden ? this.getVisibleRoots() : this.roots;
        return root != null && root.length ? root[0] : null;
    }
    getLastRoot(skipHidden = false) {
        const root = skipHidden ? this.getVisibleRoots() : this.roots;
        return root != null && root.length ? root[root.length - 1] : null;
    }
    get isFocused() {
        return TreeModel.focusedTree === this;
    }
    isNodeFocused(node) {
        return this.focusedNode === node;
    }
    isEmptyTree() {
        return this.roots && this.roots.length === 0;
    }
    get focusedNode() {
        return this.focusedNodeId ? this.getNodeById(this.focusedNodeId) : null;
    }
    get expandedNodes() {
        const nodes = Object.keys(this.expandedNodeIds)
            .filter((id) => this.expandedNodeIds[id])
            .map((id) => this.getNodeById(id));
        return nodes.filter(Boolean);
    }
    get activeNodes() {
        const nodes = Object.keys(this.activeNodeIds)
            .filter((id) => this.activeNodeIds[id])
            .map((id) => this.getNodeById(id));
        return nodes.filter(Boolean);
    }
    get hiddenNodes() {
        const nodes = Object.keys(this.hiddenNodeIds)
            .filter((id) => this.hiddenNodeIds[id])
            .map((id) => this.getNodeById(id));
        return nodes.filter(Boolean);
    }
    get selectedLeafNodes() {
        const nodes = Object.keys(this.selectedLeafNodeIds)
            .filter((id) => this.selectedLeafNodeIds[id])
            .map((id) => this.getNodeById(id));
        return nodes.filter(Boolean);
    }
    // locating nodes
    getNodeByPath(path, startNode = null) {
        if (!path)
            return null;
        startNode = startNode || this.virtualRoot;
        if (path.length === 0)
            return startNode;
        if (!startNode.children)
            return null;
        const childId = path.shift();
        const childNode = startNode.children.find(c => c.id === childId);
        if (!childNode)
            return null;
        return this.getNodeByPath(path, childNode);
    }
    getNodeById(id) {
        const idStr = id.toString();
        return this.getNodeBy((node) => node.id.toString() === idStr);
    }
    getNodeBy(predicate, startNode = null) {
        startNode = startNode || this.virtualRoot;
        if (!startNode.children)
            return null;
        const found = startNode.children.find(predicate);
        if (found) { // found in children
            return found;
        }
        else { // look in children's children
            for (let child of startNode.children) {
                const foundInChildren = this.getNodeBy(predicate, child);
                if (foundInChildren)
                    return foundInChildren;
            }
        }
    }
    isExpanded(node) {
        return this.expandedNodeIds[node.id];
    }
    isHidden(node) {
        return this.hiddenNodeIds[node.id];
    }
    isActive(node) {
        return this.activeNodeIds[node.id];
    }
    isSelected(node) {
        return this.selectedLeafNodeIds[node.id];
    }
    ngOnDestroy() {
        this.dispose();
        this.unsubscribeAll();
    }
    dispose() {
        // Dispose reactions of the replaced nodes
        if (this.virtualRoot) {
            this.virtualRoot.dispose();
        }
    }
    unsubscribeAll() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        this.subscriptions = [];
    }
    // actions
    setData({ nodes, options = null, events = null }) {
        if (options) {
            this.options = new TreeOptions(options);
        }
        if (events) {
            this.events = events;
        }
        if (nodes) {
            this.nodes = nodes;
        }
        this.update();
    }
    update() {
        // Rebuild tree:
        let virtualRootConfig = {
            id: this.options.rootId,
            virtual: true,
            [this.options.childrenField]: this.nodes
        };
        this.dispose();
        this.virtualRoot = new TreeNode(virtualRootConfig, null, this, 0);
        this.roots = this.virtualRoot.children;
        // Fire event:
        if (this.firstUpdate) {
            if (this.roots) {
                this.firstUpdate = false;
                this._calculateExpandedNodes();
            }
        }
        else {
            this.fireEvent({ eventName: TREE_EVENTS.updateData });
        }
    }
    setFocusedNode(node) {
        this.focusedNodeId = node ? node.id : null;
    }
    setFocus(value) {
        TreeModel.focusedTree = value ? this : null;
    }
    doForAll(fn) {
        this.roots.forEach((root) => root.doForAll(fn));
    }
    focusNextNode() {
        let previousNode = this.getFocusedNode();
        let nextNode = previousNode ? previousNode.findNextNode(true, true) : this.getFirstRoot(true);
        if (nextNode)
            nextNode.focus();
    }
    focusPreviousNode() {
        let previousNode = this.getFocusedNode();
        let nextNode = previousNode ? previousNode.findPreviousNode(true) : this.getLastRoot(true);
        if (nextNode)
            nextNode.focus();
    }
    focusDrillDown() {
        let previousNode = this.getFocusedNode();
        if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
            previousNode.toggleExpanded();
        }
        else {
            let nextNode = previousNode ? previousNode.getFirstChild(true) : this.getFirstRoot(true);
            if (nextNode)
                nextNode.focus();
        }
    }
    focusDrillUp() {
        let previousNode = this.getFocusedNode();
        if (!previousNode)
            return;
        if (previousNode.isExpanded) {
            previousNode.toggleExpanded();
        }
        else {
            let nextNode = previousNode.realParent;
            if (nextNode)
                nextNode.focus();
        }
    }
    setActiveNode(node, value, multi = false) {
        if (multi) {
            this._setActiveNodeMulti(node, value);
        }
        else {
            this._setActiveNodeSingle(node, value);
        }
        if (value) {
            node.focus(this.options.scrollOnActivate);
            this.fireEvent({ eventName: TREE_EVENTS.activate, node });
            this.fireEvent({ eventName: TREE_EVENTS.nodeActivate, node }); // For IE11
        }
        else {
            this.fireEvent({ eventName: TREE_EVENTS.deactivate, node });
            this.fireEvent({ eventName: TREE_EVENTS.nodeDeactivate, node }); // For IE11
        }
    }
    setSelectedNode(node, value) {
        this.selectedLeafNodeIds = Object.assign({}, this.selectedLeafNodeIds, { [node.id]: value });
        if (value) {
            node.focus();
            this.fireEvent({ eventName: TREE_EVENTS.select, node });
        }
        else {
            this.fireEvent({ eventName: TREE_EVENTS.deselect, node });
        }
    }
    setExpandedNode(node, value) {
        this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, { [node.id]: value });
        this.fireEvent({ eventName: TREE_EVENTS.toggleExpanded, node, isExpanded: value });
    }
    expandAll() {
        this.roots.forEach((root) => root.expandAll());
    }
    collapseAll() {
        this.roots.forEach((root) => root.collapseAll());
    }
    setIsHidden(node, value) {
        this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, { [node.id]: value });
    }
    setHiddenNodeIds(nodeIds) {
        this.hiddenNodeIds = nodeIds.reduce((hiddenNodeIds, id) => Object.assign(hiddenNodeIds, {
            [id]: true
        }), {});
    }
    performKeyAction(node, $event) {
        const keyAction = this.options.actionMapping.keys[$event.keyCode];
        if (keyAction) {
            $event.preventDefault();
            keyAction(this, node, $event);
            return true;
        }
        else {
            return false;
        }
    }
    filterNodes(filter, autoShow = true) {
        let filterFn;
        if (!filter) {
            return this.clearFilter();
        }
        // support function and string filter
        if (filter && typeof filter.valueOf() === 'string') {
            filterFn = (node) => node.displayField.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        }
        else if (filter && typeof filter === 'function') {
            filterFn = filter;
        }
        else {
            console.error('Don\'t know what to do with filter', filter);
            console.error('Should be either a string or function');
            return;
        }
        const ids = {};
        this.roots.forEach((node) => this._filterNode(ids, node, filterFn, autoShow));
        this.hiddenNodeIds = ids;
        this.fireEvent({ eventName: TREE_EVENTS.changeFilter });
    }
    clearFilter() {
        this.hiddenNodeIds = {};
        this.fireEvent({ eventName: TREE_EVENTS.changeFilter });
    }
    moveNode(node, to) {
        const fromIndex = node.getIndexInParent();
        const fromParent = node.parent;
        if (!this.canMoveNode(node, to, fromIndex))
            return;
        const fromChildren = fromParent.getField('children');
        // If node doesn't have children - create children array
        if (!to.parent.getField('children')) {
            to.parent.setField('children', []);
        }
        const toChildren = to.parent.getField('children');
        const originalNode = fromChildren.splice(fromIndex, 1)[0];
        // Compensate for index if already removed from parent:
        let toIndex = (fromParent === to.parent && to.index > fromIndex) ? to.index - 1 : to.index;
        toChildren.splice(toIndex, 0, originalNode);
        fromParent.treeModel.update();
        if (to.parent.treeModel !== fromParent.treeModel) {
            to.parent.treeModel.update();
        }
        this.fireEvent({
            eventName: TREE_EVENTS.moveNode,
            node: originalNode,
            to: { parent: to.parent.data, index: toIndex },
            from: { parent: fromParent.data, index: fromIndex }
        });
    }
    copyNode(node, to) {
        const fromIndex = node.getIndexInParent();
        if (!this.canMoveNode(node, to, fromIndex))
            return;
        // If node doesn't have children - create children array
        if (!to.parent.getField('children')) {
            to.parent.setField('children', []);
        }
        const toChildren = to.parent.getField('children');
        const nodeCopy = this.options.getNodeClone(node);
        toChildren.splice(to.index, 0, nodeCopy);
        node.treeModel.update();
        if (to.parent.treeModel !== node.treeModel) {
            to.parent.treeModel.update();
        }
        this.fireEvent({ eventName: TREE_EVENTS.copyNode, node: nodeCopy, to: { parent: to.parent.data, index: to.index } });
    }
    getState() {
        return {
            expandedNodeIds: this.expandedNodeIds,
            selectedLeafNodeIds: this.selectedLeafNodeIds,
            activeNodeIds: this.activeNodeIds,
            hiddenNodeIds: this.hiddenNodeIds,
            focusedNodeId: this.focusedNodeId
        };
    }
    setState(state) {
        if (!state)
            return;
        Object.assign(this, {
            expandedNodeIds: state.expandedNodeIds || {},
            selectedLeafNodeIds: state.selectedLeafNodeIds || {},
            activeNodeIds: state.activeNodeIds || {},
            hiddenNodeIds: state.hiddenNodeIds || {},
            focusedNodeId: state.focusedNodeId
        });
    }
    subscribeToState(fn) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])(() => fn(this.getState()));
    }
    canMoveNode(node, to, fromIndex = undefined) {
        const fromNodeIndex = fromIndex || node.getIndexInParent();
        // same node:
        if (node.parent === to.parent && fromIndex === to.index) {
            return false;
        }
        return !to.parent.isDescendantOf(node);
    }
    calculateExpandedNodes() {
        this._calculateExpandedNodes();
    }
    // private methods
    _filterNode(ids, node, filterFn, autoShow) {
        // if node passes function then it's visible
        let isVisible = filterFn(node);
        if (node.children) {
            // if one of node's children passes filter then this node is also visible
            node.children.forEach((child) => {
                if (this._filterNode(ids, child, filterFn, autoShow)) {
                    isVisible = true;
                }
            });
        }
        // mark node as hidden
        if (!isVisible) {
            ids[node.id] = true;
        }
        // auto expand parents to make sure the filtered nodes are visible
        if (autoShow && isVisible) {
            node.ensureVisible();
        }
        return isVisible;
    }
    _calculateExpandedNodes(startNode = null) {
        startNode = startNode || this.virtualRoot;
        if (startNode.data[this.options.isExpandedField]) {
            this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, { [startNode.id]: true });
        }
        if (startNode.children) {
            startNode.children.forEach((child) => this._calculateExpandedNodes(child));
        }
    }
    _setActiveNodeSingle(node, value) {
        // Deactivate all other nodes:
        this.activeNodes
            .filter((activeNode) => activeNode !== node)
            .forEach((activeNode) => {
            this.fireEvent({ eventName: TREE_EVENTS.deactivate, node: activeNode });
            this.fireEvent({ eventName: TREE_EVENTS.nodeDeactivate, node: activeNode }); // For IE11
        });
        if (value) {
            this.activeNodeIds = { [node.id]: true };
        }
        else {
            this.activeNodeIds = {};
        }
    }
    _setActiveNodeMulti(node, value) {
        this.activeNodeIds = Object.assign({}, this.activeNodeIds, { [node.id]: value });
    }
}
TreeModel.focusedTree = null;
TreeModel.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Array)
], TreeModel.prototype, "roots", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "expandedNodeIds", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "selectedLeafNodeIds", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "activeNodeIds", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "hiddenNodeIds", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "focusedNodeId", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", TreeNode)
], TreeModel.prototype, "virtualRoot", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "focusedNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "expandedNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "activeNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "hiddenNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "selectedLeafNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setData", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "update", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setFocusedNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setFocus", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "doForAll", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "focusNextNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "focusPreviousNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "focusDrillDown", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "focusDrillUp", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setActiveNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setSelectedNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setExpandedNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "expandAll", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "collapseAll", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setIsHidden", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setHiddenNodeIds", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "filterNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "clearFilter", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "moveNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "copyNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setState", null);

class TreeDraggedElement {
    constructor() {
        this._draggedElement = null;
    }
    set(draggedElement) {
        this._draggedElement = draggedElement;
    }
    get() {
        return this._draggedElement;
    }
    isDragging() {
        return !!this.get();
    }
}
/** @nocollapse */ TreeDraggedElement.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TreeDraggedElement_Factory() { return new TreeDraggedElement(); }, token: TreeDraggedElement, providedIn: "root" });
TreeDraggedElement.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const Y_OFFSET = 500; // Extra pixels outside the viewport, in each direction, to render nodes in
const Y_EPSILON = 150; // Minimum pixel change required to recalculate the rendered nodes
class TreeVirtualScroll {
    constructor(treeModel) {
        this.treeModel = treeModel;
        this.yBlocks = 0;
        this.x = 0;
        this.viewportHeight = null;
        this.viewport = null;
        treeModel.virtualScroll = this;
        this._dispose = [Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])(() => this.fixScroll())];
    }
    get y() {
        return this.yBlocks * Y_EPSILON;
    }
    get totalHeight() {
        return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
    }
    fireEvent(event) {
        this.treeModel.fireEvent(event);
    }
    init() {
        const fn = this.recalcPositions.bind(this);
        fn();
        this._dispose = [
            ...this._dispose,
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(() => this.treeModel.roots, fn),
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(() => this.treeModel.expandedNodeIds, fn),
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(() => this.treeModel.hiddenNodeIds, fn)
        ];
        this.treeModel.subscribe(TREE_EVENTS.loadNodeChildren, fn);
    }
    isEnabled() {
        return this.treeModel.options.useVirtualScroll;
    }
    _setYBlocks(value) {
        this.yBlocks = value;
    }
    recalcPositions() {
        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    }
    _getPositionAfter(nodes, startPos) {
        let position = startPos;
        nodes.forEach((node) => {
            node.position = position;
            position = this._getPositionAfterNode(node, position);
        });
        return position;
    }
    _getPositionAfterNode(node, startPos) {
        let position = node.getSelfHeight() + startPos;
        if (node.children && node.isExpanded) { // TBD: consider loading component as well
            position = this._getPositionAfter(node.visibleChildren, position);
        }
        node.height = position - startPos;
        return position;
    }
    clear() {
        this._dispose.forEach((d) => d());
    }
    setViewport(viewport) {
        Object.assign(this, {
            viewport,
            x: viewport.scrollLeft,
            yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
            viewportHeight: viewport.getBoundingClientRect ? viewport.getBoundingClientRect().height : 0
        });
    }
    scrollIntoView(node, force, scrollToMiddle = true) {
        if (node.options.scrollContainer) {
            const scrollContainer = node.options.scrollContainer;
            const scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
            const scrollContainerTop = scrollContainer.getBoundingClientRect().top;
            const nodeTop = this.viewport.getBoundingClientRect().top + node.position - scrollContainerTop;
            if (force || // force scroll to node
                nodeTop < scrollContainer.scrollTop || // node is above scroll container
                nodeTop + node.getSelfHeight() > scrollContainer.scrollTop + scrollContainerHeight) { // node is below container
                scrollContainer.scrollTop = scrollToMiddle ?
                    nodeTop - scrollContainerHeight / 2 : // scroll to middle
                    nodeTop; // scroll to start
            }
        }
        else {
            if (force || // force scroll to node
                node.position < this.y || // node is above viewport
                node.position + node.getSelfHeight() > this.y + this.viewportHeight) { // node is below viewport
                if (this.viewport) {
                    this.viewport.scrollTop = scrollToMiddle ?
                        node.position - this.viewportHeight / 2 : // scroll to middle
                        node.position; // scroll to start
                    this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
                }
            }
        }
    }
    getViewportNodes(nodes) {
        if (!nodes)
            return [];
        const visibleNodes = nodes.filter((node) => !node.isHidden);
        if (!this.isEnabled())
            return visibleNodes;
        if (!this.viewportHeight || !visibleNodes.length)
            return [];
        // When loading children async this method is called before their height and position is calculated.
        // In that case firstIndex === 0 and lastIndex === visibleNodes.length - 1 (e.g. 1000),
        // which means that it loops through every visibleNodes item and push them into viewportNodes array.
        // We can prevent nodes from being pushed to the array and wait for the appropriate calculations to take place
        const lastVisibleNode = visibleNodes.slice(-1)[0];
        if (!lastVisibleNode.height && lastVisibleNode.position === 0)
            return [];
        // Search for first node in the viewport using binary search
        // Look for first node that starts after the beginning of the viewport (with buffer)
        // Or that ends after the beginning of the viewport
        const firstIndex = binarySearch(visibleNodes, (node) => {
            return (node.position + Y_OFFSET > this.y) ||
                (node.position + node.height > this.y);
        });
        // Search for last node in the viewport using binary search
        // Look for first node that starts after the end of the viewport (with buffer)
        const lastIndex = binarySearch(visibleNodes, (node) => {
            return node.position - Y_OFFSET > this.y + this.viewportHeight;
        }, firstIndex);
        const viewportNodes = [];
        for (let i = firstIndex; i <= lastIndex; i++) {
            viewportNodes.push(visibleNodes[i]);
        }
        return viewportNodes;
    }
    fixScroll() {
        const maxY = Math.max(0, this.totalHeight - this.viewportHeight);
        if (this.y < 0)
            this._setYBlocks(0);
        if (this.y > maxY)
            this._setYBlocks(maxY / Y_EPSILON);
    }
}
TreeVirtualScroll.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
TreeVirtualScroll.ctorParameters = () => [
    { type: TreeModel }
];
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$2("design:type", Object)
], TreeVirtualScroll.prototype, "yBlocks", void 0);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$2("design:type", Object)
], TreeVirtualScroll.prototype, "x", void 0);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$2("design:type", Object)
], TreeVirtualScroll.prototype, "viewportHeight", void 0);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$2("design:type", Object),
    __metadata$2("design:paramtypes", [])
], TreeVirtualScroll.prototype, "y", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$2("design:type", Object),
    __metadata$2("design:paramtypes", [])
], TreeVirtualScroll.prototype, "totalHeight", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object]),
    __metadata$2("design:returntype", void 0)
], TreeVirtualScroll.prototype, "_setYBlocks", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", []),
    __metadata$2("design:returntype", void 0)
], TreeVirtualScroll.prototype, "recalcPositions", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object]),
    __metadata$2("design:returntype", void 0)
], TreeVirtualScroll.prototype, "setViewport", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object, Object, Object]),
    __metadata$2("design:returntype", void 0)
], TreeVirtualScroll.prototype, "scrollIntoView", null);
function binarySearch(nodes, condition, firstIndex = 0) {
    let index = firstIndex;
    let toIndex = nodes.length - 1;
    while (index !== toIndex) {
        let midIndex = Math.floor((index + toIndex) / 2);
        if (condition(nodes[midIndex])) {
            toIndex = midIndex;
        }
        else {
            if (index === midIndex)
                index = toIndex;
            else
                index = midIndex;
        }
    }
    return index;
}

class LoadingComponent {
}
LoadingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'tree-loading-component',
                template: `
    <span *ngIf="!template">loading...</span>
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{ $implicit: node }">
    </ng-container>
  `
            },] }
];
LoadingComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

class TreeViewportComponent {
    constructor(elementRef, virtualScroll) {
        this.elementRef = elementRef;
        this.virtualScroll = virtualScroll;
        this.setViewport = this.throttle(() => {
            this.virtualScroll.setViewport(this.elementRef.nativeElement);
        }, 17);
        this.scrollEventHandler = this.setViewport.bind(this);
    }
    ngOnInit() {
        this.virtualScroll.init();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.setViewport();
            this.virtualScroll.fireEvent({ eventName: TREE_EVENTS.initialized });
        });
        let el = this.elementRef.nativeElement;
        el.addEventListener('scroll', this.scrollEventHandler);
    }
    ngOnDestroy() {
        this.virtualScroll.clear();
        let el = this.elementRef.nativeElement;
        el.removeEventListener('scroll', this.scrollEventHandler);
    }
    getTotalHeight() {
        return ((this.virtualScroll.isEnabled() &&
            this.virtualScroll.totalHeight + 'px') ||
            'auto');
    }
    throttle(func, timeFrame) {
        let lastTime = 0;
        return function () {
            let now = Date.now();
            if (now - lastTime >= timeFrame) {
                func();
                lastTime = now;
            }
        };
    }
}
TreeViewportComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-viewport',
                providers: [TreeVirtualScroll],
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <div [style.height]="getTotalHeight()">
        <ng-content></ng-content>
      </div>
    </ng-container>
  `
            },] }
];
/** @nocollapse */
TreeViewportComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: TreeVirtualScroll }
];

class TreeComponent {
    constructor(treeModel, treeDraggedElement) {
        this.treeModel = treeModel;
        this.treeDraggedElement = treeDraggedElement;
        treeModel.eventNames.forEach((name) => this[name] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]());
        treeModel.subscribeToState((state) => this.stateChange.emit(state));
    }
    // Will be handled in ngOnChanges
    set nodes(nodes) {
    }
    ;
    set options(options) {
    }
    ;
    set focused(value) {
        this.treeModel.setFocus(value);
    }
    set state(state) {
        this.treeModel.setState(state);
    }
    onKeydown($event) {
        if (!this.treeModel.isFocused)
            return;
        if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase()))
            return;
        const focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    }
    onMousedown($event) {
        function isOutsideClick(startElement, nodeName) {
            return !startElement ? true : startElement.localName === nodeName ? false : isOutsideClick(startElement.parentElement, nodeName);
        }
        if (isOutsideClick($event.target, 'tree-root')) {
            this.treeModel.setFocus(false);
        }
    }
    ngOnChanges(changes) {
        if (changes.options || changes.nodes) {
            this.treeModel.setData({
                options: changes.options && changes.options.currentValue,
                nodes: changes.nodes && changes.nodes.currentValue,
                events: this.pick(this, this.treeModel.eventNames)
            });
        }
    }
    sizeChanged() {
        this.viewportComponent.setViewport();
    }
    pick(object, keys) {
        return keys.reduce((obj, key) => {
            if (object && object.hasOwnProperty(key)) {
                obj[key] = object[key];
            }
            return obj;
        }, {});
    }
}
TreeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'Tree, tree-root',
                providers: [TreeModel],
                template: `
      <tree-viewport #viewport>
          <div
                  class="angular-tree-component"
                  [class.node-dragging]="treeDraggedElement.isDragging()"
                  [class.angular-tree-component-rtl]="treeModel.options.rtl">
              <tree-node-collection
                      *ngIf="treeModel.roots"
                      [nodes]="treeModel.roots"
                      [treeModel]="treeModel"
                      [templates]="{
            loadingTemplate: loadingTemplate,
            treeNodeTemplate: treeNodeTemplate,
            treeNodeWrapperTemplate: treeNodeWrapperTemplate,
            treeNodeFullTemplate: treeNodeFullTemplate
          }">
              </tree-node-collection>
              <tree-node-drop-slot
                      class="empty-tree-drop-slot"
                      *ngIf="treeModel.isEmptyTree()"
                      [dropIndex]="0"
                      [node]="treeModel.virtualRoot">
              </tree-node-drop-slot>
          </div>
      </tree-viewport>
  `
            },] }
];
/** @nocollapse */
TreeComponent.ctorParameters = () => [
    { type: TreeModel },
    { type: TreeDraggedElement }
];
TreeComponent.propDecorators = {
    loadingTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['loadingTemplate', { static: false },] }],
    treeNodeTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['treeNodeTemplate', { static: false },] }],
    treeNodeWrapperTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['treeNodeWrapperTemplate', { static: false },] }],
    treeNodeFullTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['treeNodeFullTemplate', { static: false },] }],
    viewportComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['viewport', { static: false },] }],
    nodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    focused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toggleExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    deactivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nodeActivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nodeDeactivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    deselect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    updateData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    initialized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    moveNode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    copyNode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    loadNodeChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    changeFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['body: keydown', ['$event'],] }],
    onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['body: mousedown', ['$event'],] }]
};

class TreeNodeComponent {
}
TreeNodeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'TreeNode, tree-node',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <div
        *ngIf="!templates.treeNodeFullTemplate"
        [class]="node.getClass()"
        [class.tree-node]="true"
        [class.tree-node-expanded]="node.isExpanded && node.hasChildren"
        [class.tree-node-collapsed]="node.isCollapsed && node.hasChildren"
        [class.tree-node-leaf]="node.isLeaf"
        [class.tree-node-active]="node.isActive"
        [class.tree-node-focused]="node.isFocused"
      >
        <tree-node-drop-slot
          *ngIf="index === 0"
          [dropIndex]="node.index"
          [node]="node.parent"
        ></tree-node-drop-slot>

        <tree-node-wrapper
          [node]="node"
          [index]="index"
          [templates]="templates"
        ></tree-node-wrapper>

        <tree-node-children
          [node]="node"
          [templates]="templates"
        ></tree-node-children>
        <tree-node-drop-slot
          [dropIndex]="node.index + 1"
          [node]="node.parent"
        ></tree-node-drop-slot>
      </div>
      <ng-container
        [ngTemplateOutlet]="templates.treeNodeFullTemplate"
        [ngTemplateOutletContext]="{
          $implicit: node,
          node: node,
          index: index,
          templates: templates
        }"
      >
      </ng-container>
    </ng-container>
  `
            },] }
];
TreeNodeComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

class TreeNodeContent {
}
TreeNodeContent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-content',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
  <span *ngIf="!template">{{ node.displayField }}</span>
  <ng-container
    [ngTemplateOutlet]="template"
    [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index }">
  </ng-container>`
            },] }
];
TreeNodeContent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

class TreeNodeDropSlot {
    onDrop($event) {
        this.node.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this.node, index: this.dropIndex }
        });
    }
    allowDrop(element, $event) {
        return this.node.options.allowDrop(element, { parent: this.node, index: this.dropIndex }, $event);
    }
}
TreeNodeDropSlot.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'TreeNodeDropSlot, tree-node-drop-slot',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <div
      class="node-drop-slot"
      (treeDrop)="onDrop($event)"
      [treeAllowDrop]="allowDrop.bind(this)"
      [allowDragoverStyling]="true">
    </div>
  `
            },] }
];
TreeNodeDropSlot.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

class TreeNodeExpanderComponent {
}
TreeNodeExpanderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-expander',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <span
        *ngIf="node.hasChildren"
        [class.toggle-children-wrapper-expanded]="node.isExpanded"
        [class.toggle-children-wrapper-collapsed]="node.isCollapsed"
        class="toggle-children-wrapper"
        (click)="node.mouseAction('expanderClick', $event)"
      >
        <span class="toggle-children"></span>
      </span>
      <span *ngIf="!node.hasChildren" class="toggle-children-placeholder">
      </span>
    </ng-container>
  `
            },] }
];
TreeNodeExpanderComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

class TreeNodeChildrenComponent {
}
TreeNodeChildrenComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-children',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <div
        [class.tree-children]="true"
        [class.tree-children-no-padding]="node.options.levelPadding"
        *treeAnimateOpen="
          node.isExpanded;
          speed: node.options.animateSpeed;
          acceleration: node.options.animateAcceleration;
          enabled: node.options.animateExpand
        "
      >
        <tree-node-collection
          *ngIf="node.children"
          [nodes]="node.children"
          [templates]="templates"
          [treeModel]="node.treeModel"
        >
        </tree-node-collection>
        <tree-loading-component
          [style.padding-left]="node.getNodePadding()"
          class="tree-node-loading"
          *ngIf="!node.children"
          [template]="templates.loadingTemplate"
          [node]="node"
        ></tree-loading-component>
      </div>
    </ng-container>
  `
            },] }
];
TreeNodeChildrenComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

// Re-export mobx operators to be able to use inside components with AOT:
function actionInternal(...args) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(...args);
}
const action = Object.assign(actionInternal, mobx__WEBPACK_IMPORTED_MODULE_2__["action"]);
function computedInternal(...args) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_2__["computed"])(...args);
}
const computed = Object.assign(computedInternal, mobx__WEBPACK_IMPORTED_MODULE_2__["computed"]);
function observableInternal(...args) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_2__["observable"])(...args);
}
const observable = Object.assign(observableInternal, mobx__WEBPACK_IMPORTED_MODULE_2__["observable"]);

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class TreeNodeCollectionComponent {
    constructor() {
        this._dispose = [];
    }
    get nodes() {
        return this._nodes;
    }
    set nodes(nodes) {
        this.setNodes(nodes);
    }
    get marginTop() {
        const firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
        const relativePosition = firstNode && firstNode.parent
            ? firstNode.position -
                firstNode.parent.position -
                firstNode.parent.getSelfHeight()
            : 0;
        return `${relativePosition}px`;
    }
    setNodes(nodes) {
        this._nodes = nodes;
    }
    ngOnInit() {
        this.virtualScroll = this.treeModel.virtualScroll;
        this._dispose = [
            // return node indexes so we can compare structurally,
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(() => {
                return this.virtualScroll
                    .getViewportNodes(this.nodes)
                    .map(n => n.index);
            }, nodeIndexes => {
                this.viewportNodes = nodeIndexes.map(i => this.nodes[i]);
            }, { compareStructural: true, fireImmediately: true }),
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(() => this.nodes, nodes => {
                this.viewportNodes = this.virtualScroll.getViewportNodes(nodes);
            })
        ];
    }
    ngOnDestroy() {
        this._dispose.forEach(d => d());
    }
    trackNode(index, node) {
        return node.id;
    }
}
TreeNodeCollectionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-collection',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <div [style.margin-top]="marginTop">
        <tree-node
          *ngFor="let node of viewportNodes; let i = index; trackBy: trackNode"
          [node]="node"
          [index]="i"
          [templates]="templates"
        >
        </tree-node>
      </div>
    </ng-container>
  `
            },] }
];
TreeNodeCollectionComponent.propDecorators = {
    nodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
__decorate$3([
    observable,
    __metadata$3("design:type", Object)
], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
__decorate$3([
    observable,
    __metadata$3("design:type", Array)
], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
__decorate$3([
    computed,
    __metadata$3("design:type", String),
    __metadata$3("design:paramtypes", [])
], TreeNodeCollectionComponent.prototype, "marginTop", null);
__decorate$3([
    action,
    __metadata$3("design:type", Function),
    __metadata$3("design:paramtypes", [Object]),
    __metadata$3("design:returntype", void 0)
], TreeNodeCollectionComponent.prototype, "setNodes", null);

class TreeNodeWrapperComponent {
}
TreeNodeWrapperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-wrapper',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
      <div *ngIf="!templates.treeNodeWrapperTemplate" class="node-wrapper" [style.padding-left]="node.getNodePadding()">
          <tree-node-checkbox *ngIf="node.options.useCheckbox" [node]="node"></tree-node-checkbox>
          <tree-node-expander [node]="node"></tree-node-expander>
          <div class="node-content-wrapper"
               [class.node-content-wrapper-active]="node.isActive"
               [class.node-content-wrapper-focused]="node.isFocused"
               (click)="node.mouseAction('click', $event)"
               (dblclick)="node.mouseAction('dblClick', $event)"
               (mouseover)="node.mouseAction('mouseOver', $event)"
               (mouseout)="node.mouseAction('mouseOut', $event)"
               (contextmenu)="node.mouseAction('contextMenu', $event)"
               (treeDrop)="node.onDrop($event)"
               (treeDropDragOver)="node.mouseAction('dragOver', $event)"
               (treeDropDragLeave)="node.mouseAction('dragLeave', $event)"
               (treeDropDragEnter)="node.mouseAction('dragEnter', $event)"
               [treeAllowDrop]="node.allowDrop"
               [allowDragoverStyling]="node.allowDragoverStyling()"
               [treeDrag]="node"
               [treeDragEnabled]="node.allowDrag()">

              <tree-node-content [node]="node" [index]="index" [template]="templates.treeNodeTemplate">
              </tree-node-content>
          </div>
      </div>
      <ng-container
              [ngTemplateOutlet]="templates.treeNodeWrapperTemplate"
              [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index, templates: templates }">
      </ng-container>
  `
            },] }
];
TreeNodeWrapperComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

class TreeNodeCheckboxComponent {
}
TreeNodeCheckboxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-checkbox',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <input
        class="tree-node-checkbox"
        type="checkbox"
        (click)="node.mouseAction('checkboxClick', $event)"
        [checked]="node.isSelected"
        [indeterminate]="node.isPartiallySelected"
      />
    </ng-container>
  `
            },] }
];
TreeNodeCheckboxComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

const DRAG_OVER_CLASS = 'is-dragging-over';
const DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';
class TreeDropDirective {
    constructor(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.allowDragoverStyling = true;
        this.onDropCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragOverCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragLeaveCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnterCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._allowDrop = (element, $event) => true;
        this.dragOverEventHandler = this.onDragOver.bind(this);
        this.dragEnterEventHandler = this.onDragEnter.bind(this);
        this.dragLeaveEventHandler = this.onDragLeave.bind(this);
    }
    set treeAllowDrop(allowDrop) {
        if (allowDrop instanceof Function) {
            this._allowDrop = allowDrop;
        }
        else
            this._allowDrop = (element, $event) => allowDrop;
    }
    allowDrop($event) {
        return this._allowDrop(this.treeDraggedElement.get(), $event);
    }
    ngAfterViewInit() {
        let el = this.el.nativeElement;
        this.ngZone.runOutsideAngular(() => {
            el.addEventListener('dragover', this.dragOverEventHandler);
            el.addEventListener('dragenter', this.dragEnterEventHandler);
            el.addEventListener('dragleave', this.dragLeaveEventHandler);
        });
    }
    ngOnDestroy() {
        let el = this.el.nativeElement;
        el.removeEventListener('dragover', this.dragOverEventHandler);
        el.removeEventListener('dragenter', this.dragEnterEventHandler);
        el.removeEventListener('dragleave', this.dragLeaveEventHandler);
    }
    onDragOver($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.addDisabledClass();
            }
            return;
        }
        this.onDragOverCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        $event.preventDefault();
        if (this.allowDragoverStyling) {
            this.addClass();
        }
    }
    onDragEnter($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDragEnterCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
    }
    onDragLeave($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.removeDisabledClass();
            }
            return;
        }
        this.onDragLeaveCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
    }
    onDrop($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDropCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
        this.treeDraggedElement.set(null);
    }
    addClass() {
        this.renderer.addClass(this.el.nativeElement, DRAG_OVER_CLASS);
    }
    removeClass() {
        this.renderer.removeClass(this.el.nativeElement, DRAG_OVER_CLASS);
    }
    addDisabledClass() {
        this.renderer.addClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    }
    removeDisabledClass() {
        this.renderer.removeClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    }
}
TreeDropDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[treeDrop]'
            },] }
];
/** @nocollapse */
TreeDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: TreeDraggedElement },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
TreeDropDirective.propDecorators = {
    allowDragoverStyling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onDropCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['treeDrop',] }],
    onDragOverCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['treeDropDragOver',] }],
    onDragLeaveCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['treeDropDragLeave',] }],
    onDragEnterCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['treeDropDragEnter',] }],
    treeAllowDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
};

const DRAG_OVER_CLASS$1 = 'is-dragging-over';
class TreeDragDirective {
    constructor(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.dragEventHandler = this.onDrag.bind(this);
    }
    ngAfterViewInit() {
        let el = this.el.nativeElement;
        this.ngZone.runOutsideAngular(() => {
            el.addEventListener('drag', this.dragEventHandler);
        });
    }
    ngDoCheck() {
        this.renderer.setAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
    }
    ngOnDestroy() {
        let el = this.el.nativeElement;
        el.removeEventListener('drag', this.dragEventHandler);
    }
    onDragStart(ev) {
        // setting the data is required by firefox
        ev.dataTransfer.setData('text', ev.target.id);
        this.treeDraggedElement.set(this.draggedElement);
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragStart', ev);
        }
    }
    onDrag(ev) {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('drag', ev);
        }
    }
    onDragEnd() {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragEnd');
        }
        this.treeDraggedElement.set(null);
    }
}
TreeDragDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[treeDrag]'
            },] }
];
/** @nocollapse */
TreeDragDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: TreeDraggedElement },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
TreeDragDirective.propDecorators = {
    draggedElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeDrag',] }],
    treeDragEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragstart', ['$event'],] }],
    onDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragend',] }]
};

const EASE_ACCELERATION = 1.005;
class TreeAnimateOpenDirective {
    constructor(renderer, templateRef, viewContainerRef) {
        this.renderer = renderer;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    set isOpen(value) {
        if (value) {
            this._show();
            if (this.isEnabled && this._isOpen === false) {
                this._animateOpen();
            }
        }
        else {
            this.isEnabled ? this._animateClose() : this._hide();
        }
        this._isOpen = !!value;
    }
    ;
    _show() {
        if (this.innerElement)
            return;
        // create child view
        this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
    }
    _hide() {
        this.viewContainerRef.clear();
        this.innerElement = null;
    }
    _animateOpen() {
        let delta = this.animateSpeed;
        let ease = this.animateAcceleration;
        let maxHeight = 0;
        // set height to 0
        this.renderer.setStyle(this.innerElement, 'max-height', `0`);
        // increase maxHeight until height doesn't change
        setTimeout(() => {
            const i = setInterval(() => {
                if (!this._isOpen || !this.innerElement)
                    return clearInterval(i);
                maxHeight += delta;
                const roundedMaxHeight = Math.round(maxHeight);
                this.renderer.setStyle(this.innerElement, 'max-height', `${roundedMaxHeight}px`);
                const height = this.innerElement.getBoundingClientRect ? this.innerElement.getBoundingClientRect().height : 0; // TBD use renderer
                delta *= ease;
                ease *= EASE_ACCELERATION;
                if (height < roundedMaxHeight) {
                    // Make maxHeight auto because animation finished and container might change height later on
                    this.renderer.setStyle(this.innerElement, 'max-height', null);
                    clearInterval(i);
                }
            }, 17);
        });
    }
    _animateClose() {
        if (!this.innerElement)
            return;
        let delta = this.animateSpeed;
        let ease = this.animateAcceleration;
        let height = this.innerElement.getBoundingClientRect().height; // TBD use renderer
        // slowly decrease maxHeight to 0, starting from current height
        const i = setInterval(() => {
            if (this._isOpen || !this.innerElement)
                return clearInterval(i);
            height -= delta;
            this.renderer.setStyle(this.innerElement, 'max-height', `${height}px`);
            delta *= ease;
            ease *= EASE_ACCELERATION;
            if (height <= 0) {
                // after animation complete - remove child element
                this.viewContainerRef.clear();
                this.innerElement = null;
                clearInterval(i);
            }
        }, 17);
    }
}
TreeAnimateOpenDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[treeAnimateOpen]'
            },] }
];
/** @nocollapse */
TreeAnimateOpenDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
TreeAnimateOpenDirective.propDecorators = {
    animateSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeAnimateOpenSpeed',] }],
    animateAcceleration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeAnimateOpenAcceleration',] }],
    isEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeAnimateOpenEnabled',] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeAnimateOpen',] }]
};

class TreeModule {
}
TreeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    TreeComponent,
                    TreeNodeComponent,
                    TreeNodeContent,
                    LoadingComponent,
                    TreeDropDirective,
                    TreeDragDirective,
                    TreeNodeExpanderComponent,
                    TreeNodeChildrenComponent,
                    TreeNodeDropSlot,
                    TreeNodeCollectionComponent,
                    TreeViewportComponent,
                    TreeNodeWrapperComponent,
                    TreeNodeCheckboxComponent,
                    TreeAnimateOpenDirective,
                    TreeMobxAutorunDirective
                ],
                exports: [
                    TreeComponent,
                    TreeNodeComponent,
                    TreeNodeContent,
                    LoadingComponent,
                    TreeDropDirective,
                    TreeDragDirective,
                    TreeNodeExpanderComponent,
                    TreeNodeChildrenComponent,
                    TreeNodeDropSlot,
                    TreeNodeCollectionComponent,
                    TreeViewportComponent,
                    TreeNodeWrapperComponent,
                    TreeNodeCheckboxComponent,
                    TreeAnimateOpenDirective,
                    TreeMobxAutorunDirective
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: []
            },] }
];

/*
 * Public API Surface of angular-tree-component
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "EvgD":
/*!*******************************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZS1iaW5kaW5nLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "FAcU":
/*!*************************************************!*\
  !*** ./projects/docs-app/src/app/app.module.ts ***!
  \*************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "7NSS");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "ZmsY");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "Bs0Y");
/* harmony import */ var _custom_elements_custom_elements_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-elements/custom-elements.module */ "hKYw");
/* harmony import */ var _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-elements/code/code-example.module */ "DW/B");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/examples.module */ "N7bS");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-tree-component */ "EjZu");
/* harmony import */ var _fundamentals_fundamentals_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fundamentals/fundamentals.module */ "bGLL");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/layout.module */ "dP2+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/shared.module */ "7pyI");
/* harmony import */ var _guides_guides_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guides/guides.module */ "Q3uI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _custom_elements_custom_elements_module__WEBPACK_IMPORTED_MODULE_11__["CustomElementsModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
            _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_12__["CodeExampleModule"],
            _examples_examples_module__WEBPACK_IMPORTED_MODULE_13__["ExamplesModule"],
            angular_tree_component__WEBPACK_IMPORTED_MODULE_14__["TreeModule"],
            _fundamentals_fundamentals_module__WEBPACK_IMPORTED_MODULE_15__["FundamentalsModule"],
            _guides_guides_module__WEBPACK_IMPORTED_MODULE_18__["GuidesModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "Fmej":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/templates/templates.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Custom Templates</h1>\r\n\r\n<p>You can customize the tree's templates using embedded <code>ng-template</code> tags.</p>\r\n\r\n<h2>Demo</h2>\r\n\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/fundamentals/templates/templates-demo/templates-demo.component.ts\" target=\"_blank\">Source Code</a></p>\r\n\r\n<div class=\"demo-container\">\r\n    <app-templates-demo></app-templates-demo>\r\n</div>\r\n\r\n\r\n<h2>#treeNodeTemplate</h2>\r\n\r\n<p>Use #treeNodeTemplate for the content of the node.</p>\r\n<p>You will have access to the following variables:</p>\r\n\r\n<table>\r\n    <tr>\r\n        <th>Variable</th>\r\n        <th>Description</th>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>node</td>\r\n        <td>Node of type TreeNode. Exposes many useful methods, as well as a <code>data</code> attribute with the original node's data.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>index</td>\r\n        <td>The index of the current node in the parent's children.</td>\r\n    </tr>\r\n</table>\r\n\r\n<p>For example:</p>\r\n\r\n<code-example>{{ template }}</code-example>\r\n\r\n\r\n<h2>#treeNodeWrapperTemplate</h2>\r\n\r\n<p>This option is useful in case all you need to further customise the expander location and the node's event listeners.</p>\r\n<p>Start by specifying the following template, and make sure the tree still renders as expected.</p>\r\n<p>Then remove / change whatever you need:</p>\r\n\r\n<code-example>{{ treeNodeWrapper }}</code-example>\r\n\r\n\r\n<h2>#loadingTemplate</h2>\r\n\r\n<p>For asynchronous data loading, use #loadingTemplate to customize the message that appears while loading the children.</p>\r\n<p>For example:</p>\r\n\r\n<code-example>{{ treeLoading }}</code-example>\r\n\r\n<h2>#treeNodeFullTemplate</h2>\r\n\r\n<p>This option is useful in case all other customisation options are not suitable for you.</p>\r\n<p>It allows for full customisation of the node, as it replaces the internal template for the TreeNode component.</p>\r\n<p>Start by specifying the following template, and make sure the tree still renders as expected.</p>\r\n<p>Then remove / change whatever you need:</p>\r\n\r\n<code-example>{{ fullTemplate }}</code-example>\r\n\r\n<div class=\"alert is-important\">\r\n    <p>Do not remove <code>let-templates=\"templates\"</code> and passing <code>[templates]=\"templates\"</code> to <code>tree-node-children</code>. If you do that, the children of your nodes will not receive the custom template you provided.</p>\r\n</div>\r\n");

/***/ }),

/***/ "G0n/":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/filter-guide/filter-guide.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Filtering</h1>\r\n\r\n<h2>Demo</h2>\r\n\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/guides/filter-guide/filter/filter.component.ts\" target=\"_blank\">Source Code</a></p>\r\n\r\n<div class=\"demo-container\">\r\n  <app-filter></app-filter>\r\n</div>\r\n\r\n<h2>Intro</h2>\r\n<p>\r\n  Filtering on the tree will ensure that if a node is visible, then all its ancestors are also visible.\r\n  This is being taken care of by the treeModel 'filterNodes' function.\r\n</p>\r\n\r\n<h2>Filter by function</h2>\r\n<p>\r\n  The function receives the node and returns true if the node should be hidden, false otherwise.\r\n</p>\r\n<code-example>{{functionFilter}}</code-example>\r\n\r\n<h2>Filter by string</h2>\r\n<p>The function filters all nodes whose displayField ('name' by default) contains the given string. The comparison is done case insensitive.</p>\r\n<code-example>tree.treeModel.filterNodes(\"text\", true);</code-example>\r\n<p>\r\n  Note the second field - true by default.\r\n  This flag makes sure all nodes are visible after searching (i.e. expand all relevant ancestors).\r\n</p>\r\n\r\n<h2>Filtering by AP</h2>\r\n<p>\r\n  You can traverse the tree and do your own magic, and call <code>hide()</code>, <code>show()</code>, or <code>setIsHidden(value)</code> on all nodes as you wish.\r\n</p>\r\n\r\n<h2>Filtering by 2-way binding</h2>\r\n<p>\r\n  You can bind to the tree state and supply a dictionary of hidden node IDs.\r\n  See <a [routerLink]=\"['/', 'fundamentals', 'state']\">2-way binding to state</a> for more information.\r\n</p>\r\n");

/***/ }),

/***/ "G7yB":
/*!*****************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/events/events.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "G8ZE":
/*!***********************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/basic-usage/basic-usage.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy11c2FnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "GBvE":
/*!***************************************************************************!*\
  !*** ./projects/docs-app/src/app/layout/nav-item/nav-item.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/************************************\n             Media queries\n To use these, put this snippet in the appropriate selector:\n     @include bp(tiny) {\n         background-color: purple;\n     }\n     Replace \"tiny\" with \"medium\" or \"big\" as necessary.\n*************************************/\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  margin: 0;\n  color: #444444;\n  font-size: 14px;\n  font-size: 1.4rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #333333;\n}\nh1 {\n  font-size: 24px;\n  font-size: 2.4rem;\n  font-weight: 500;\n  display: inline-block;\n  margin: 8px 0px;\n}\n@media screen and (max-width: 600px) {\n  h1 {\n    margin-top: 0;\n  }\n}\nh2 {\n  font-size: 22px;\n  font-size: 2.2rem;\n  font-weight: 500;\n  margin: 32px 0px 24px;\n  clear: both;\n}\nh3 {\n  font-size: 20px;\n  font-size: 2rem;\n  font-weight: 400;\n  margin: 24px 0px 12px;\n  clear: both;\n}\nh4 {\n  font-size: 18px;\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin: 8px 0px;\n  clear: both;\n}\nh5 {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  margin: 8px 0px;\n  clear: both;\n}\nh6 {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: #6E6E6E;\n  margin: 8px 0px;\n  clear: both;\n}\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  font-size: inherit;\n}\n@media screen and (max-width: 600px) {\n  h2,\nh3,\nh4,\nh5,\nh6 {\n    margin: 8px 0;\n  }\n}\n.mat-tab-body-wrapper h2 {\n  margin-top: 0;\n}\np,\nol,\nul,\nol,\nli,\ninput,\na {\n  font-size: 14px;\n  font-size: 1.4rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.3px;\n  letter-spacing: 0.03rem;\n  font-weight: 400;\n  color: #444444;\n}\np > em,\nol > em,\nul > em,\nol > em,\nli > em,\ninput > em,\na > em {\n  letter-spacing: 0.3px;\n  letter-spacing: 0.03rem;\n}\np {\n  margin: 14px 0 0;\n}\np + ul {\n  margin-top: 4px;\n}\nol li,\nol p {\n  margin: 4px 0;\n}\nol ol {\n  list-style-type: lower-alpha;\n}\nol ol ol {\n  list-style-type: lower-roman;\n}\nli {\n  padding-bottom: 8px;\n}\nli p {\n  margin: 0;\n}\na {\n  text-decoration: none;\n}\n.app-toolbar a {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 400;\n  color: #FFFFFF;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  text-transform: uppercase;\n}\nstrong {\n  font-weight: 500;\n}\ntable {\n  border-collapse: collapse;\n  border-radius: 2px;\n  border-spacing: 0;\n  margin: 12px 0 32px;\n}\ntable tbody th {\n  max-width: 100px;\n  padding: 13px 32px;\n  text-align: left;\n}\ntd {\n  font-weight: 400;\n  padding: 8px 30px;\n  letter-spacing: 0.3px;\n  letter-spacing: 0.03rem;\n}\ntd > p:first-child,\ntd ul:first-child {\n  margin-top: 0;\n}\ntd > p:last-child,\ntd ul:last-child {\n  margin-bottom: 0;\n}\nth {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  padding: 13px 32px;\n  text-align: left;\n}\ncode {\n  font-family: \"Droid Sans Mono\", monospace;\n  font-size: 90%;\n  color: #444444;\n}\n.sidenav-content a {\n  color: #1976D2;\n}\n.sidenav-content a:hover {\n  color: #6E6E6E;\n}\n:host {\n  display: block;\n}\n.vertical-menu-item {\n  box-sizing: border-box;\n  color: #444444;\n  cursor: pointer;\n  flex: 1;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  max-width: 260px;\n  overflow-wrap: break-word;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  text-decoration: none;\n  text-align: left;\n  word-wrap: break-word;\n}\n.vertical-menu-item:hover {\n  background-color: #DBDBDB;\n  color: #1E88E5;\n  text-shadow: 0 0 5px #ffffff;\n}\n.vertical-menu-item:focus {\n  outline: #1E88E5 auto 2px;\n}\n.vertical-menu-item .node-title {\n  flex: 1;\n}\n.vertical-menu-item .mat-icon {\n  margin: 4px;\n}\n.vertical-menu-item.selected {\n  color: #1E88E5;\n}\nbutton.vertical-menu-item {\n  border: none;\n  background-color: transparent;\n  margin-right: 0;\n  width: 100%;\n}\n.heading-children.expanded {\n  visibility: visible;\n  opacity: 1;\n  max-height: 4000px;\n  transition: visibility 500ms, opacity 500ms, max-height 500ms;\n  transition-timing-function: ease-in-out;\n}\n.heading-children.collapsed {\n  visibility: hidden;\n  opacity: 0;\n  max-height: 1px;\n  transition: visibility 275ms, opacity 275ms, max-height 280ms;\n  transition-timing-function: ease-out;\n}\n.level-1 {\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  padding-left: 14px;\n  transition: background-color 0.2s;\n}\n.level-2 {\n  color: #6E6E6E;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  padding-left: 12px;\n  text-transform: none;\n}\n.level-3 {\n  color: #6E6E6E;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 14px;\n  padding-left: 10px;\n}\n.level-4 {\n  color: #6E6E6E;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 14px;\n  padding-left: 8px;\n}\n.level-1.expanded .mat-icon, .level-2.expanded .mat-icon {\n  transform: rotate(90deg);\n  transition: transform 150ms;\n  transition-timing-function: ease-in-out;\n}\n.level-1:not(.expanded) .mat-icon, .level-2:not(.expanded) .mat-icon {\n  transform: rotate(0deg);\n  transition: transform 150ms;\n  transition-timing-function: ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxfdHlwb2dyYXBoeS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxQ0FBQTtBQ0FBO0VBQ0UsZ0JBQUE7QUNTRjtBRE5BO0VBQ0UsOEdFSlU7RUZLVixTQUFBO0VBQ0EsY0VnQlM7RUhpQlQsZUFBQTtFQUNBLGlCQUFBO0VDaENBLG1DQUFBO0VBQ0Esa0NBQUE7QUNVRjtBRFBBO0VBQ0UsY0VVUztBREFYO0FEUEE7RUR1QkUsZUFBQTtFQUNBLGlCQUFBO0VDdEJBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDV0Y7QURURTtFQU5GO0lBT0ksYUFBQTtFQ1lGO0FBQ0Y7QURUQTtFRFlFLGVBQUE7RUFDQSxpQkFBQTtFQ1hBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDYUY7QURWQTtFREtFLGVBQUE7RUFDQSxlQUFBO0VDSkEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNjRjtBRFhBO0VERkUsZUFBQTtFQUNBLGlCQUFBO0VDR0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2VGO0FEWkE7RURURSxlQUFBO0VBQ0EsaUJBQUE7RUNVQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDZ0JGO0FEYkE7RURoQkUsZUFBQTtFQUNBLGlCQUFBO0VDaUJBLGdCQUFBO0VBQ0EsY0VyQ1c7RUZzQ1gsZUFBQTtFQUNBLFdBQUE7QUNpQkY7QURURTs7Ozs7RUFDRSxrQkFBQTtBQ2dCSjtBRGJFO0VBVEY7Ozs7O0lBVUksYUFBQTtFQ29CRjtBQUNGO0FEakJBO0VBQ0UsYUFBQTtBQ29CRjtBRGpCQTs7Ozs7OztFRDFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFTQSxpQkFBQTtFQUNBLG1CQUFBO0VBTkEscUJBQUE7RUFDQSx1QkFBQTtFQzhDQSxnQkFBQTtFQUNBLGNFdEVTO0FENkZYO0FEdEJFOzs7Ozs7O0VEakRBLHFCQUFBO0VBQ0EsdUJBQUE7QUVnRkY7QUQzQkE7RUFDRSxnQkFBQTtBQzhCRjtBRDNCQTtFQUNFLGVBQUE7QUM4QkY7QUQxQkU7O0VBRUUsYUFBQTtBQzZCSjtBRHpCQTtFQUNFLDRCQUFBO0FDNEJGO0FEMUJFO0VBQ0UsNEJBQUE7QUM0Qko7QUR4QkE7RUFDRSxtQkFBQTtBQzJCRjtBRHpCRTtFQUNFLFNBQUE7QUMyQko7QUR2QkE7RUFDRSxxQkFBQTtBQzBCRjtBRHZCQTtFRDlGRSxlQUFBO0VBQ0EsaUJBQUE7RUMrRkEsZ0JBQUE7RUFDQSxjRXpITTtFRjBITiw4R0V6SVU7RUYwSVYseUJBQUE7QUMyQkY7QUR4QkE7RUFDRSxnQkFBQTtBQzJCRjtBRHhCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDMkJGO0FEeEJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDMkJGO0FEeEJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFRHBIQSxxQkFBQTtFQUNBLHVCQUFBO0FFZ0pGO0FEeEJJOztFQUNFLGFBQUE7QUMyQk47QUR6Qkk7O0VBQ0UsZ0JBQUE7QUM0Qk47QUR2QkE7RUR2SUUsZUFBQTtFQUNBLGlCQUFBO0VDd0lBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQzJCRjtBRHhCQTtFQUNFLHlDRXJMVTtFRnNMVixjQUFBO0VBQ0EsY0VsS1M7QUQ2TFg7QUR4QkE7RUFDRSxjRWpMSztBRDRNUDtBRDFCRTtFQUNFLGNFektTO0FEcU1iO0FBdk5BO0VBQ0UsY0FBQTtBQTBORjtBQXZOQTtFQUNFLHNCQUFBO0VBQ0EsY0NhUztFRFpULGVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQTBORjtBQXhORTtFQUNFLHlCQ05RO0VET1IsY0NiUztFRGNULDRCQUFBO0FBME5KO0FBdk5FO0VBQ0UseUJBQUE7QUF5Tko7QUF0TkU7RUFDRSxPQUFBO0FBd05KO0FBcE5FO0VBQ0UsV0FBQTtBQXNOSjtBQWxOQTtFQUNFLGNDaENXO0FEcVBiO0FBbE5BO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFxTkY7QUFsTkE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBRUEsdUNBQUE7QUFxTkY7QUFsTkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkRBQUE7RUFFQSxvQ0FBQTtBQXFORjtBQWxOQTtFQUNFLDhHQ3pFVTtFRDBFVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBcU5GO0FBbE5BO0VBQ0UsY0M1RFc7RUQ2RFgsOEdDbEZVO0VEbUZWLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFxTkY7QUFsTkE7RUFDRSxjQ3JFVztFRHNFWCw4R0MzRlU7RUQ0RlYsZUFBQTtFQUNBLGtCQUFBO0FBcU5GO0FBbE5BO0VBQ0UsY0M1RVc7RUQ2RVgsOEdDbEdVO0VEbUdWLGVBQUE7RUFDQSxpQkFBQTtBQXFORjtBQWxOQTtFRm5DRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7QUU2UEY7QUF4TkE7RUZ2Q0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0FFdVFGIiwiZmlsZSI6Im5hdi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgTWVkaWEgcXVlcmllc1xyXG4gVG8gdXNlIHRoZXNlLCBwdXQgdGhpcyBzbmlwcGV0IGluIHRoZSBhcHByb3ByaWF0ZSBzZWxlY3RvcjpcclxuICAgICBAaW5jbHVkZSBicCh0aW55KSB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICAgICB9XHJcbiAgICAgUmVwbGFjZSBcInRpbnlcIiB3aXRoIFwibWVkaXVtXCIgb3IgXCJiaWdcIiBhcyBuZWNlc3NhcnkuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AbWl4aW4gYnAoJHBvaW50KSB7XHJcblxyXG4gICRicC14c21hbGw6IFwiKG1pbi13aWR0aDogMzIwcHgpXCI7XHJcbiAgJGJwLXRlZW55OiBcIihtaW4td2lkdGg6IDQ4MHB4KVwiO1xyXG4gICRicC10aW55OiBcIihtaW4td2lkdGg6IDYwMHB4KVwiO1xyXG4gICRicC1zbWFsbDogXCIobWluLXdpZHRoOiA2NTBweClcIjtcclxuICAkYnAtbWVkaXVtOiBcIihtaW4td2lkdGg6IDgwMHB4KVwiO1xyXG4gICRicC1iaWc6IFwiKG1pbi13aWR0aDogMTAwMHB4KVwiO1xyXG5cclxuICBAaWYgJHBvaW50ID09IGJpZyB7XHJcbiAgICBAbWVkaWEgI3skYnAtYmlnfSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZWRpdW0ge1xyXG4gICAgQG1lZGlhICN7JGJwLW1lZGl1bX0geyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gc21hbGwge1xyXG4gICAgQG1lZGlhICN7JGJwLXNtYWxsfSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gdGlueSB7XHJcbiAgICBAbWVkaWEgI3skYnAtdGlueX0gIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHRlZW55IHtcclxuICAgIEBtZWRpYSAjeyRicC10ZWVueX0gIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHhzbWFsbCB7XHJcbiAgICBAbWVkaWEgI3skYnAteHNtYWxsfSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUkVNIEZvbnQgQWRqdXN0bWVudHNcclxuQG1peGluIGZvbnQtc2l6ZSgkc2l6ZVZhbHVlKSB7XHJcbiAgZm9udC1zaXplOiAoJHNpemVWYWx1ZSkgKyBweDtcclxuICBmb250LXNpemU6ICgkc2l6ZVZhbHVlIC8gMTApICsgcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gbGV0dGVyLXNwYWNpbmcoJHNwYWNpbmdWYWx1ZSkge1xyXG4gIGxldHRlci1zcGFjaW5nOiAoJHNwYWNpbmdWYWx1ZSkgKyBweDtcclxuICBsZXR0ZXItc3BhY2luZzogKCRzcGFjaW5nVmFsdWUgLyAxMCkgKyByZW07XHJcbn1cclxuXHJcbkBtaXhpbiBsaW5lLWhlaWdodCgkaGVpZ2h0VmFsdWUpIHtcclxuICBsaW5lLWhlaWdodDogKCRoZWlnaHRWYWx1ZSkgKyBweDtcclxuICBsaW5lLWhlaWdodDogKCRoZWlnaHRWYWx1ZSAvIDEwKSArIHJlbTtcclxufVxyXG5cclxuLy8gUExBQ0VIT0xERVJcclxuLy8gTk9URTogVmVuZG9yLXByZWZpeGVkIHNlbGVjdG9ycyBtdXN0IGJlIG9uIHNlcGFyYXRlIGJsb2NrcywgYmVjYXVzZSBvbmUgaW52YWxpZC91bmtub3duXHJcbi8vICAgICAgIHNlbGVjdG9yIHdpbGwgaW52YWxpZGF0ZSB0aGUgd2hvbGUgYmxvY2suXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7IEBjb250ZW50OyB9ICAvLyBJRVxyXG4gICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgeyBAY29udGVudDsgfSAgLy8gRWRnZVxyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBAY29udGVudDsgfSAgLy8gUVEgQnJvd3NlclxyXG4gICY6OnBsYWNlaG9sZGVyICAgICAgICAgICAgICAgeyBAY29udGVudDsgfSAgLy8gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpXHJcbn1cclxuXHJcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGNvZGVibG9jaygkYmdjb2xvcikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvOyAvLyB3YXMgMjRcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICRsaWdodGdyYXk7XHJcbn1cclxuXHJcbi8vIElORk8gQ0FSRCBTS0VMRVRPTlxyXG5AbWl4aW4gY2FyZCgkaGVpZ2h0LCAkd2lkdGgpIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgd2lkdGg6ICR3aWR0aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCRibGFjaywgMC4yNCksIDAgMCAycHggcmdiYSgkYmxhY2ssIDAuMTIpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggOHB4IHJnYmEoJGJsYWNrLCAwLjI0KSwgMCAwIDhweCByZ2JhKCRibGFjaywgMC4xMik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsImh0bWwge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogJGRhcmtncmF5O1xyXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCk7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgY29sb3I6ICRkZWVwZ3JheTtcclxufVxyXG5cclxuaDEge1xyXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgyNCk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA4cHggMHB4O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMjIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAzMnB4IDBweCAyNHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgQGluY2x1ZGUgZm9udC1zaXplKDIwKTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMjRweCAwcHggMTJweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuaDQge1xyXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxOCk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiA4cHggMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgQGluY2x1ZGUgZm9udC1zaXplKDE2KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAkbWVkaXVtZ3JheTtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtdGFiLWJvZHktd3JhcHBlciBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxucCxcclxub2wsXHJcbnVsLFxyXG5vbCxcclxubGksXHJcbmlucHV0LFxyXG5hIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTQpO1xyXG4gIEBpbmNsdWRlIGxpbmUtaGVpZ2h0KDI0KTtcclxuICBAaW5jbHVkZSBsZXR0ZXItc3BhY2luZygwLjMpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICRkYXJrZ3JheTtcclxuICAmID4gZW0ge1xyXG4gICAgQGluY2x1ZGUgbGV0dGVyLXNwYWNpbmcoMC4zKTtcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMTRweCAwIDA7XHJcbn1cclxuXHJcbnAgKyB1bCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG5vbCB7XHJcbiAgbGksXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gIH1cclxufVxyXG5cclxub2wgb2wge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XHJcblxyXG4gIG9sIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItcm9tYW47XHJcbiAgfVxyXG59XHJcblxyXG5saSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hcHAtdG9vbGJhciBhIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBtYXJnaW46IDEycHggMCAzMnB4O1xyXG59XHJcblxyXG50YWJsZSB0Ym9keSB0aCB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBwYWRkaW5nOiAxM3B4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZzogOHB4IDMwcHg7XHJcbiAgQGluY2x1ZGUgbGV0dGVyLXNwYWNpbmcoMC4zKTtcclxuXHJcbiAgPiBwLFxyXG4gIHVsIHtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnRoIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMTNweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmNvZGUge1xyXG4gIGZvbnQtZmFtaWx5OiAkY29kZS1mb250O1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG4gIGNvbG9yOiAkZGFya2dyYXk7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6ICRibHVlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRtZWRpdW1ncmF5O1xyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgTWVkaWEgcXVlcmllc1xuIFRvIHVzZSB0aGVzZSwgcHV0IHRoaXMgc25pcHBldCBpbiB0aGUgYXBwcm9wcmlhdGUgc2VsZWN0b3I6XG4gICAgIEBpbmNsdWRlIGJwKHRpbnkpIHtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICAgfVxuICAgICBSZXBsYWNlIFwidGlueVwiIHdpdGggXCJtZWRpdW1cIiBvciBcImJpZ1wiIGFzIG5lY2Vzc2FyeS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDhweCAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMzJweCAwcHggMjRweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMjRweCAwcHggMTJweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDhweCAwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBtYXJnaW46IDhweCAwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5oMiBhLFxuaDMgYSxcbmg0IGEsXG5oNSBhLFxuaDYgYSB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbn1cblxuLm1hdC10YWItYm9keS13cmFwcGVyIGgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxucCxcbm9sLFxudWwsXG5vbCxcbmxpLFxuaW5wdXQsXG5hIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxucCA+IGVtLFxub2wgPiBlbSxcbnVsID4gZW0sXG5vbCA+IGVtLFxubGkgPiBlbSxcbmlucHV0ID4gZW0sXG5hID4gZW0ge1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAxNHB4IDAgMDtcbn1cblxucCArIHVsIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG5vbCBsaSxcbm9sIHAge1xuICBtYXJnaW46IDRweCAwO1xufVxuXG5vbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XG59XG5vbCBvbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItcm9tYW47XG59XG5cbmxpIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbmxpIHAge1xuICBtYXJnaW46IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hcHAtdG9vbGJhciBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgbWFyZ2luOiAxMnB4IDAgMzJweDtcbn1cblxudGFibGUgdGJvZHkgdGgge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxM3B4IDMycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogOHB4IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XG59XG50ZCA+IHA6Zmlyc3QtY2hpbGQsXG50ZCB1bDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG50ZCA+IHA6bGFzdC1jaGlsZCxcbnRkIHVsOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG50aCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEzcHggMzJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRyb2lkIFNhbnMgTW9ub1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogIzQ0NDQ0NDtcbn1cblxuLnNpZGVuYXYtY29udGVudCBhIHtcbiAgY29sb3I6ICMxOTc2RDI7XG59XG4uc2lkZW5hdi1jb250ZW50IGE6aG92ZXIge1xuICBjb2xvcjogIzZFNkU2RTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZlcnRpY2FsLW1lbnUtaXRlbSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDI2MHB4O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi52ZXJ0aWNhbC1tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJEQkRCO1xuICBjb2xvcjogIzFFODhFNTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZmZmZjtcbn1cbi52ZXJ0aWNhbC1tZW51LWl0ZW06Zm9jdXMge1xuICBvdXRsaW5lOiAjMUU4OEU1IGF1dG8gMnB4O1xufVxuLnZlcnRpY2FsLW1lbnUtaXRlbSAubm9kZS10aXRsZSB7XG4gIGZsZXg6IDE7XG59XG4udmVydGljYWwtbWVudS1pdGVtIC5tYXQtaWNvbiB7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4udmVydGljYWwtbWVudS1pdGVtLnNlbGVjdGVkIHtcbiAgY29sb3I6ICMxRTg4RTU7XG59XG5cbmJ1dHRvbi52ZXJ0aWNhbC1tZW51LWl0ZW0ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGluZy1jaGlsZHJlbi5leHBhbmRlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIG1heC1oZWlnaHQ6IDQwMDBweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1MDBtcywgb3BhY2l0eSA1MDBtcywgbWF4LWhlaWdodCA1MDBtcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLmhlYWRpbmctY2hpbGRyZW4uY29sbGFwc2VkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBtYXgtaGVpZ2h0OiAxcHg7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMjc1bXMsIG9wYWNpdHkgMjc1bXMsIG1heC1oZWlnaHQgMjgwbXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5sZXZlbC0xIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmxldmVsLTIge1xuICBjb2xvcjogIzZFNkU2RTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4ubGV2ZWwtMyB7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmxldmVsLTQge1xuICBjb2xvcjogIzZFNkU2RTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLmxldmVsLTEuZXhwYW5kZWQgLm1hdC1pY29uLCAubGV2ZWwtMi5leHBhbmRlZCAubWF0LWljb24ge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLmxldmVsLTE6bm90KC5leHBhbmRlZCkgLm1hdC1pY29uLCAubGV2ZWwtMjpub3QoLmV4cGFuZGVkKSAubWF0LWljb24ge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59IiwiLy8gVFlQT0dSQVBIWVxyXG4kbWFpbi1mb250OiBcIlJvYm90b1wiLFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLFwiTHVjaWRhIEdyYW5kZVwiLHNhbnMtc2VyaWY7XHJcbiRjb2RlLWZvbnQ6IFwiRHJvaWQgU2FucyBNb25vXCIsIG1vbm9zcGFjZTtcclxuXHJcbi8vIFotTEFZRVJcclxuJGxheWVyLTE6IDE7XHJcbiRsYXllci0yOiAyO1xyXG4kbGF5ZXItMzogMztcclxuJGxheWVyLTQ6IDQ7XHJcbiRsYXllci01OiA1O1xyXG5cclxuLy8gQ09MT1IgUEFMRVRURVxyXG4kYmx1ZTogIzE5NzZEMjtcclxuJGFjY2VudGJsdWU6ICMxRTg4RTU7XHJcbiRicmlnaHRyZWQ6ICNERDAwMzE7XHJcbiRkYXJrcmVkOiAjQzMwMDJGO1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRvZmZ3aGl0ZTogI0ZBRkFGQTtcclxuJGJhY2tncm91bmRncmF5OiAjRjFGMUYxO1xyXG4kbGlnaHRncmF5OiAjREJEQkRCO1xyXG4kbGlnaHRib3hncmF5OiAjRUJFQkVCO1xyXG4kbWlzdDogI0VDRUZGMTtcclxuJG1lZGl1bWdyYXk6ICM2RTZFNkU7XHJcbiRkYXJrZ3JheTogIzQ0NDQ0NDtcclxuJGRlZXBncmF5OiAjMzMzMzMzO1xyXG4kYmxhY2s6ICMwQTEwMTQ7XHJcbiRvcmFuZ2U6ICNGRjk4MDA7XHJcbiRkYXJrb3JhbmdlOiAjOTQwO1xyXG4kYW50aS1wYXR0ZXJuOiAkYnJpZ2h0cmVkO1xyXG5cclxuLy8gQVBJICYgQ09ERSBDT0xPUlNcclxuJGFtYmVyLTcwMDogI0ZGQTAwMDtcclxuJGJsdWUtNDAwOiAjNDJBNUY1O1xyXG4kYmx1ZS01MDA6ICMyMTk2RjM7XHJcbiRibHVlLTYwMDogIzFFODhFNTtcclxuJGJsdWUtODAwOiAjMTU2NUMwO1xyXG4kYmx1ZS05MDA6ICMwRDQ3QTE7XHJcbiRibHVlLWdyZXktNTA6ICNFQ0VGRjE7XHJcbiRibHVlLWdyZXktMTAwOiAjQ0ZEOERDO1xyXG4kYmx1ZS1ncmV5LTIwMDogI0IwQkVDNTtcclxuJGJsdWUtZ3JleS0zMDA6ICM5MEE0QUU7XHJcbiRibHVlLWdyZXktNDAwOiAjNzg5MDlDO1xyXG4kYmx1ZS1ncmV5LTUwMDogIzYwN0Q4QjtcclxuJGJsdWUtZ3JleS02MDA6ICM1NDZFN0E7XHJcbiRibHVlLWdyZXktNzAwOiAjNDU1QTY0O1xyXG4kYmx1ZS1ncmV5LTgwMDogIzM3NDc0RjtcclxuJGJsdWUtZ3JleS05MDA6ICMyNjMyMzg7XHJcbiRjb2RlZ3JlZW46ICMxN2ZmMGI7XHJcbiRncmVlbi01MDA6ICM0Q0FGNTA7XHJcbiRncmVlbi04MDA6ICMyRTdEMzI7XHJcbiRsaWdodC1ncmVlbi02MDA6ICM3Q0IzNDI7XHJcbiRwaW5rLTYwMDogI0Q4MUI2MDtcclxuJHB1cnBsZS02MDA6ICM4RTI0QUE7XHJcbiR0ZWFsLTUwMDogIzAwOTY4ODtcclxuJGxpZ2h0Z3JleTogI0Y1RjZGNztcclxuXHJcbi8vIFNUQVRFIENPTE9SU1xyXG4kZm9jdXMtb3V0bGluZS1vbmRhcms6IHJnYmEoJHdoaXRlLCAwLjgpO1xyXG4kZm9jdXMtb3V0bGluZS1vbmxpZ2h0OiAkYWNjZW50Ymx1ZTtcclxuXHJcbi8vIEdSQURJRU5UU1xyXG4kYmx1ZWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCRibHVlLTkwMCwkYmx1ZS00MDApO1xyXG4kcmVkZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsJGRhcmtyZWQsJGJyaWdodHJlZCk7XHJcblxyXG4vLyBBUEkgTEFCRUwgQ09MT1IgQU5EIFNZTUJPTFMgTUFQXHJcbiRhcGktc3ltYm9sczogKFxyXG4gICAgICAgIGFsbDogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlXHJcbiAgICAgICAgKSxcclxuICAgICAgICBjbGFzczogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtNTAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICBjb25zdDogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0snLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG1lZGl1bWdyYXlcclxuICAgICAgICApLFxyXG4gICAgICAgIGRlY29yYXRvcjogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0AnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtODAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkaXJlY3RpdmU6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwaW5rLTYwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZW51bTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0UnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFtYmVyLTcwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZnVuY3Rpb246IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdGJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbi01MDBcclxuICAgICAgICApLFxyXG4gICAgICAgIGludGVyZmFjZTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0knLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRlYWwtNTAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICBsZXQ6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdLJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtZWRpdW1ncmF5XHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZ21vZHVsZTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ00nLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhcmtvcmFuZ2VcclxuICAgICAgICApLFxyXG4gICAgICAgIHBhY2thZ2U6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdQaycsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHVycGxlLTYwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgcGlwZTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1AnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtZ3JleS02MDBcclxuICAgICAgICApLFxyXG4gICAgICAgIHR5cGUtYWxpYXM6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdUJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1ncmVlbi02MDBcclxuICAgICAgICApLFxyXG4gICAgICAgIHZhcjogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0snLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG1lZGl1bWdyYXlcclxuICAgICAgICApLFxyXG4pO1xyXG5cclxuLy8gT1RIRVJcclxuJHNtYWxsLWJyZWFrcG9pbnQtd2lkdGg6IDg0MHB4O1xyXG4kcGhvbmUtYnJlYWtwb2ludDogNDgwcHg7XHJcbiR0YWJsZXQtYnJlYWtwb2ludDogODAwcHg7XHJcbiJdfQ== */");

/***/ }),

/***/ "GCFs":
/*!************************************************************!*\
  !*** ./projects/docs-app/src/app/shared/logger.service.ts ***!
  \************************************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "x7Jv");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let Logger = class Logger {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    log(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.log(value, ...rest);
        }
    }
    error(error) {
        this.errorHandler.handleError(error);
    }
    warn(value, ...rest) {
        console.warn(value, ...rest);
    }
};
Logger.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] }
];
Logger = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]])
], Logger);



/***/ }),

/***/ "GKTd":
/*!*******************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/options/options.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "H8kz":
/*!*****************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/large-tree-guide/large-tree-guide.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LargeTreeGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeTreeGuideComponent", function() { return LargeTreeGuideComponent; });
/* harmony import */ var _raw_loader_large_tree_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./large-tree-guide.component.html */ "x0/P");
/* harmony import */ var _large_tree_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./large-tree-guide.component.scss */ "hHEn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let LargeTreeGuideComponent = class LargeTreeGuideComponent {
    constructor() {
        this.html = `
<div style="height: 400px">
  <tree-root [nodes]="nodes" [options]="options"></tree-root>
</div>`;
        this.javascript = `
// Fixed node height
options = {
  useVirtualScroll: true,
  nodeHeight: 22
}

// Or using a function
options = {
  useVirtualScroll: true,
  nodeHeight: (node: TreeNode) => node.myHeight,
  dropSlotHeight: 3
}`;
    }
};
LargeTreeGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-large-tree-guide',
        template: _raw_loader_large_tree_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_large_tree_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], LargeTreeGuideComponent);



/***/ }),

/***/ "HPE1":
/*!*******************************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/state-binding/state-binding.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZS1iaW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "If76":
/*!*********************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/redux-guide/redux-guide.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWR1eC1ndWlkZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "J/z8":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/state-binding/state-binding.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>2-way binding to state</h1>\r\n\r\n<p>You can control the tree state using 2-way binding.</p>\r\n<p>The state includes the following:</p>\r\n\r\n<table>\r\n    <tr>\r\n        <td>expandedNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>selectedLeafNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>activeNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>hiddenNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>focusedNodeId</td>\r\n        <td>node ID</td>\r\n    </tr>\r\n</table>\r\n\r\n<p>You can change the state reference and the tree will respond automatically, and also access the tree state at any time, as it is always updated via the 2-way binding.</p>\r\n\r\n<p>Example:</p>\r\n\r\n<code-example>{{ example }}</code-example>\r\n\r\n\r\n<h2>!important note</h2>\r\n<p>You must have an 'id' property on the nodes in order for this to work. Otherwise - the tree will automatically generate internal IDs which change every time you change the nodes array.</p>\r\n\r\n\r\n<h2>Persist state to localstorage</h2>\r\n<p>This example is using the 2 way binding to tree state to auto save & restore from localstorage:</p>\r\n<code-example>{{ localStorage }}</code-example>\r\n\r\n<h3>Demo</h3>\r\n\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.ts\" target=\"_blank\">Source Code</a></p>\r\n\r\n<div class=\"demo-container\">\r\n    <app-state-binding-demo></app-state-binding-demo>\r\n</div>\r\n\r\n\r\n<h2>Using API</h2>\r\n<p>Alternatively, you can use <code>getState</code>, <code>setState</code> and <code>subscribe</code> on treeModel API. <code>subscribe</code> will callback a function every time state changes.</p>\r\n<code-example>{{ api }}</code-example>\r\n");

/***/ }),

/***/ "JNNt":
/*!***********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/load-more-example/load-more-example.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkLW1vcmUtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "JfD2":
/*!**********************************************************************************!*\
  !*** ./projects/docs-app/src/app/custom-elements/code/pretty-printer.service.ts ***!
  \**********************************************************************************/
/*! exports provided: PrettyPrinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrettyPrinter", function() { return PrettyPrinter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/logger.service */ "GCFs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Wrapper around the prettify.js library
 */
let PrettyPrinter = class PrettyPrinter {
    constructor(logger) {
        this.logger = logger;
        this.prettyPrintOne = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.getPrettyPrintOne()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    getPrettyPrintOne() {
        const ppo = window['prettyPrintOne'];
        return ppo ? Promise.resolve(ppo) :
            // `prettyPrintOne` is not on `window`, which means `prettify.js` has not been loaded yet.
            // Import it; ad a side-effect it will add `prettyPrintOne` on `window`.
            __webpack_require__.e(/*! import() | assets-js-prettify-js */ "assets-js-prettify-js").then(__webpack_require__.t.bind(null, /*! ../../../assets/js/prettify.js */ "Ic/o", 7))
                .then(() => window['prettyPrintOne'], err => {
                const msg = `Cannot get prettify.js from server: ${err.message}`;
                this.logger.error(new Error(msg));
                // return a pretty print fn that always fails.
                return () => { throw new Error(msg); };
            });
    }
    /**
     * Format code snippet as HTML
     * @param {string} code - the code snippet to format; should already be HTML encoded
     * @param {string} [language] - The language of the code to render (could be javascript, html, typescript, etc)
     * @param {string|number} [linenums] - Whether to display line numbers:
     *  - false: don't display
     *  - true: do display
     *  - number: do display but start at the given number
     * @returns Observable<string> - Observable of formatted code
     */
    formatCode(code, language, linenums) {
        return this.prettyPrintOne.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(ppo => {
            try {
                return ppo(code, language, linenums);
            }
            catch (err) {
                const msg = `Could not format code that begins '${code.substr(0, 50)}...'.`;
                console.error(msg, err);
                throw new Error(msg);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
};
PrettyPrinter.ctorParameters = () => [
    { type: _shared_logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"] }
];
PrettyPrinter = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_shared_logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]])
], PrettyPrinter);



/***/ }),

/***/ "KE/T":
/*!*******************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/templates/templates-demo/templates-demo.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".root1Class {\n  color: blue;\n}\n\n.root2Class {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0ZW1wbGF0ZXMtZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJ0ZW1wbGF0ZXMtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290MUNsYXNzIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLnJvb3QyQ2xhc3Mge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "KHBh":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/examples/basic-usage/basic-usage.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Basic usage</h1>\r\n\r\n<h2>Working tree</h2>\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/examples/basic-usage/basic-tree/basic-tree.component.ts\" target=\"_blank\">Source Code</a></p>\r\n<div class=\"demo-container\">\r\n  <app-basic-tree></app-basic-tree>\r\n</div>\r\n\r\n<h2>How to implement</h2>\r\n\r\n<p>See <a [routerLink]=\"['/', 'fundamentals', 'nodes']\">Nodes Fundamentals</a></p>\r\n");

/***/ }),

/***/ "LAbQ":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/styling/styling.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Styling</h1>\r\n\r\n<p>The tree comes with very basic style.</p>\r\n<p>The following classes are available for customization:</p>\r\n\r\n<ul>\r\n    <li>.angular-tree-component</li>\r\n    <li>.angular-tree-component-rtl</li>\r\n    <li>.tree-node</li>\r\n    <li>.tree-node-wrapper</li>\r\n    <li>.tree-node-expanded</li>\r\n    <li>.tree-node-collapsed</li>\r\n    <li>.tree-node-focused</li>\r\n    <li>.tree-node-active</li>\r\n    <li>.tree-node-level-X</li>\r\n    <li>.tree-node-leaf</li>\r\n    <li>.node-wrapper</li>\r\n    <li>.toggle-children-wrapper</li>\r\n    <li>.toggle-children</li>\r\n    <li>.toggle-children-placeholder</li>\r\n    <li>.node-content-wrapper</li>\r\n    <li>.tree-children</li>\r\n    <li>.tree-node-loading</li>\r\n    <li>.node-drop-slot</li>\r\n    <li>.is-dragging-over</li>\r\n    <li>.is-dragging-over-disabled</li>\r\n</ul>\r\n\r\n<h2>Overriding style</h2>\r\n<p>Surround your tree with a class, and add your custom style to your style.scss file.</p>\r\n<p>Scope all the custom rules under your custom class - and that's it!</p>\r\n\r\n<h2>Example styles</h2>\r\n<p>These styles were provided by the community. They might be outdated.</p>\r\n<p>If you find an error in these styles please suggest an edit - don't open a github issue.</p>\r\n<p>Thanks</p>\r\n\r\n\r\n<h3>Branch lines</h3>\r\n<p>This theme puts explorer like branch lines that connect the parents with their children</p>\r\n<div class=\"lightbox\">\r\n    <img src=\"assets/styling/f50955b-Screen_Shot_2016-11-29_at_12.11.52_PM.png\" alt=\"Branch lines\">\r\n</div>\r\n<code-example>{{ branchLines }}</code-example>\r\n\r\n\r\n<h3>Pull right</h3>\r\n<p>This theme allows placing items in the right side of the tree nodes using <code>pull-right</code> class.</p>\r\n<p>It is based on flexbox, so relevant only to browsers who support it.</p>\r\n<div class=\"lightbox\">\r\n    <img src=\"assets/styling/28d7625-Screen_Shot_2016-11-29_at_12.11.01_PM.png\" alt=\"Pull right\">\r\n</div>\r\n<code-example>{{ pullRight }}</code-example>\r\n\r\n\r\n<h3>ACE Admin theme</h3>\r\n<p><a href=\"http://ace.jeka.by/treeview.html\" target=\"_blank\">ACE Admin theme</a> style.</p>\r\n<p>Credit to Viet Anh Do for sending this theme!</p>\r\n<div class=\"lightbox\">\r\n    <img src=\"assets/styling/0bd50e1-treecss.png\" alt=\"ACE Admin theme\">\r\n</div>\r\n<code-example>{{ ace }}</code-example>\r\n");

/***/ }),

/***/ "LVmU":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/layout/nav-item/nav-item.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!node.children\">\r\n    <a [routerLink]=\"node.link\" [ngClass]=\"classes\" title=\"{{node.tooltip}}\"\r\n       class=\"vertical-menu-item\">\r\n        <span>{{node.title}}</span>\r\n    </a>\r\n</div>\r\n\r\n<div *ngIf=\"node.children\">\r\n    <a *ngIf=\"node.link != null\" [routerLink]=\"node.link\" [ngClass]=\"classes\" title=\"{{node.tooltip}}\"\r\n       (click)=\"headerClicked()\" class=\"vertical-menu-item heading\">\r\n        <span>{{node.title}}</span>\r\n        <mat-icon class=\"rotating-icon\">chevron_right</mat-icon>\r\n    </a>\r\n\r\n    <button *ngIf=\"node.link == null\" type=\"button\" [ngClass]=\"classes\" title=\"{{node.tooltip}}\"\r\n            (click)=\"headerClicked()\" class=\"vertical-menu-item heading\"\r\n            [attr.aria-pressed]=\"isExpanded\">\r\n        <span>{{node.title}}</span>\r\n        <mat-icon class=\"rotating-icon\">chevron_right</mat-icon>\r\n    </button>\r\n\r\n    <div class=\"heading-children\" [ngClass]=\"classes\">\r\n        <app-nav-item *ngFor=\"let node of nodeChildren\" [level]=\"level + 1\" [isWide]=\"isWide\"\r\n                      [isParentExpanded]=\"isExpanded\"\r\n                      [node]=\"node\" [selectedNodes]=\"selectedNodes\"></app-nav-item>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "MF7w":
/*!*********************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/async-guide/async-guide.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3luYy1ndWlkZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "N7bS":
/*!***************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/examples.module.ts ***!
  \***************************************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-usage/basic-usage.component */ "+6E/");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-tree-component */ "EjZu");
/* harmony import */ var _basic_usage_basic_tree_basic_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-usage/basic-tree/basic-tree.component */ "0yV0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _columns_example_columns_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./columns-example/columns-example.component */ "8CB6");
/* harmony import */ var _columns_example_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./columns-example/columns/columns.component */ "/oPW");
/* harmony import */ var _crud_example_crud_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-example/crud-example.component */ "lQNf");
/* harmony import */ var _crud_example_crud_crud_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crud-example/crud/crud.component */ "nT2r");
/* harmony import */ var _load_more_example_load_more_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./load-more-example/load-more-example.component */ "qEib");
/* harmony import */ var _load_more_example_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./load-more-example/load-more/load-more.component */ "gabs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let ExamplesModule = class ExamplesModule {
};
ExamplesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_2__["BasicUsageComponent"], _basic_usage_basic_tree_basic_tree_component__WEBPACK_IMPORTED_MODULE_4__["BasicTreeComponent"], _columns_example_columns_example_component__WEBPACK_IMPORTED_MODULE_6__["ColumnsExampleComponent"], _columns_example_columns_columns_component__WEBPACK_IMPORTED_MODULE_7__["ColumnsComponent"], _crud_example_crud_example_component__WEBPACK_IMPORTED_MODULE_8__["CrudExampleComponent"], _crud_example_crud_crud_component__WEBPACK_IMPORTED_MODULE_9__["CrudComponent"], _load_more_example_load_more_example_component__WEBPACK_IMPORTED_MODULE_10__["LoadMoreExampleComponent"], _load_more_example_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_11__["LoadMoreComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ]
    })
], ExamplesModule);



/***/ }),

/***/ "NRkf":
/*!***********************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/templates/templates.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "NhoM":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/examples/columns-example/columns/columns.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"base-tree-container\">\r\n  <div #treeHeader class=\"tree-header\">\r\n    <div class=\"tree-column tree-header-column\"><span>Company name</span></div>\r\n    <div\r\n      *ngFor=\"let columnName of columns\"\r\n      class=\"tree-column tree-header-column\">\r\n      <span>{{ columnName }}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"tree-wrapper\">\r\n    <tree-root\r\n      #tree\r\n      [options]=\"options\"\r\n      [nodes]=\"nodes\">\r\n      <!-- Node wrapper template to control wrapper classes and cursor behaviour -->\r\n      <ng-template #treeNodeWrapperTemplate let-node let-index=\"index\">\r\n        <div class=\"tree-node-wrapper no-pointer\">\r\n          <tree-node-expander [node]=\"node\"></tree-node-expander>\r\n          <div class=\"node-content-wrapper pointer\"\r\n               [class.node-content-wrapper-active]=\"node.isActive\"\r\n               [class.node-content-wrapper-focused]=\"node.isFocused\"\r\n               (click)=\"node.mouseAction('click', $event)\"\r\n               (dblclick)=\"node.mouseAction('dblClick', $event)\"\r\n               (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\r\n               (treeDrop)=\"node.onDrop($event)\"\r\n               [treeAllowDrop]=\"node.allowDrop\"\r\n               [treeDrag]=\"node\"\r\n               [treeDragEnabled]=\"node.allowDrag()\">\r\n\r\n            <div class=\"tree-column-wrapper\">\r\n              <div class=\"tree-column\" [title]=\"node.data.name\">\r\n                <span>{{ node.data.name }}</span>\r\n              </div>\r\n              <div\r\n                *ngFor=\"let columnName of columns\"\r\n                class=\"tree-column\"\r\n                [title]=\"node.data[columnName]\">\r\n                <span>{{node.data[columnName]}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </tree-root>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "OzNO":
/*!*****************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/checkboxes-guide/checkboxes-guide.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CheckboxesGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxesGuideComponent", function() { return CheckboxesGuideComponent; });
/* harmony import */ var _raw_loader_checkboxes_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./checkboxes-guide.component.html */ "fKsw");
/* harmony import */ var _checkboxes_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxes-guide.component.scss */ "hSpG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CheckboxesGuideComponent = class CheckboxesGuideComponent {
};
CheckboxesGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-checkboxes-guide',
        template: _raw_loader_checkboxes_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_checkboxes_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], CheckboxesGuideComponent);



/***/ }),

/***/ "Ptc1":
/*!*****************************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/state-binding/state-binding.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StateBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateBindingComponent", function() { return StateBindingComponent; });
/* harmony import */ var _raw_loader_state_binding_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./state-binding.component.html */ "J/z8");
/* harmony import */ var _state_binding_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-binding.component.scss */ "HPE1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let StateBindingComponent = class StateBindingComponent {
    constructor() {
        this.example = `
import \{ Component \} from \'@angular/core\';
import \{ ITreeState \} from \'angular-tree-component\';

@Component(\{
  selector: \'app-saverestore\',
  template: \`
    <tree-root [(state)]="state" [nodes]="nodes"></tree-root>
    <button (click)="collapseAll()">collapse all</button>
    <button (click)="hideFolders()">hide folders</button>
  \`,
  styles: []
\})
export class MyComponent \{
  state: ITreeState;
  nodes = [
    { id: 1, isFolder: true, name: 'folder1', children: [
      { id: 2, name: 'file1', isFolder: false },
      { id: 3, name: 'file2', isFolder: false }
    ] },
    { id: 4, isFolder: false, name: 'flatfile1' },
    { id: 5, isFolder: false, name: 'flatfile2' }
  ];

  collapseAll() {
    this.state = {
      ...this.state,
      expandedNodeIds: {}
    };
  }

  hideFolders() {
    const hiddenNodeIds = {};

    this.nodes.forEach((node) => {
      if (node.isFolder) {
        hiddenNodeIds[node.id] = true;
      }
    });

    this.state = {
      ...this.state,
      hiddenNodeIds
    };
  }
}
`;
        this.localStorage = `
<tree-root
  [(state)]="state"
  [nodes]="nodes">
</tree-root>

class MyComponent {
  get state() {
    return localStorage.treeState && JSON.parse(localStorage.treeState);
  }
  set state(state) {
    localStorage.treeState = JSON.stringify(state);
  }
}
`;
        this.api = `
<tree-root
  #tree
  (initialize)="onInit(tree)"
  [nodes]="nodes">
</tree-root>

class MyComponent {
  onInit(tree) {
    if (localStorage.treeState) {
      tree.treeModel.setState(JSON.parse(localStorage.treeState);
    }
    tree.treeModel.subscribe((state) => {
      localStorage.treeState = JSON.stringify(state);
    });
  }
}
`;
    }
};
StateBindingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-state-binding',
        template: _raw_loader_state_binding_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_state_binding_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], StateBindingComponent);



/***/ }),

/***/ "Q3uI":
/*!***********************************************************!*\
  !*** ./projects/docs-app/src/app/guides/guides.module.ts ***!
  \***********************************************************/
/*! exports provided: GuidesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesModule", function() { return GuidesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _async_guide_async_guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async-guide/async-guide.component */ "hjlW");
/* harmony import */ var _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-elements/code/code-example.module */ "DW/B");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-tree-component */ "EjZu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _async_guide_async_async_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./async-guide/async/async.component */ "6JDo");
/* harmony import */ var _filter_guide_filter_guide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-guide/filter-guide.component */ "zYED");
/* harmony import */ var _filter_guide_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-guide/filter/filter.component */ "md+Y");
/* harmony import */ var _update_guide_update_guide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-guide/update-guide.component */ "eH7g");
/* harmony import */ var _drag_drop_guide_drag_drop_guide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drag-drop-guide/drag-drop-guide.component */ "1AU6");
/* harmony import */ var _drag_drop_guide_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drag-drop-guide/drag-drop/drag-drop.component */ "jvAB");
/* harmony import */ var _checkboxes_guide_checkboxes_guide_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkboxes-guide/checkboxes-guide.component */ "OzNO");
/* harmony import */ var _checkboxes_guide_checkboxes_checkboxes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkboxes-guide/checkboxes/checkboxes.component */ "dDF0");
/* harmony import */ var _large_tree_guide_large_tree_guide_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./large-tree-guide/large-tree-guide.component */ "H8kz");
/* harmony import */ var _large_tree_guide_large_tree_large_tree_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./large-tree-guide/large-tree/large-tree.component */ "smvT");
/* harmony import */ var _redux_guide_redux_guide_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./redux-guide/redux-guide.component */ "V4S9");
/* harmony import */ var _rtl_guide_rtl_guide_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rtl-guide/rtl-guide.component */ "WlIa");
/* harmony import */ var _rtl_guide_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rtl-guide/rtl/rtl.component */ "RSg8");
/* harmony import */ var _custom_fields_guide_custom_fields_guide_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custom-fields-guide/custom-fields-guide.component */ "Dak6");
/* harmony import */ var _expanding_guide_expanding_guide_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./expanding-guide/expanding-guide.component */ "qkpM");
/* harmony import */ var _auto_scroll_guide_auto_scroll_guide_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auto-scroll-guide/auto-scroll-guide.component */ "pUSG");
/* harmony import */ var _auto_scroll_guide_auto_scroll_auto_scroll_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auto-scroll-guide/auto-scroll/auto-scroll.component */ "qaL4");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























let GuidesModule = class GuidesModule {
};
GuidesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_async_guide_async_guide_component__WEBPACK_IMPORTED_MODULE_2__["AsyncGuideComponent"], _async_guide_async_async_component__WEBPACK_IMPORTED_MODULE_6__["AsyncComponent"], _filter_guide_filter_guide_component__WEBPACK_IMPORTED_MODULE_7__["FilterGuideComponent"], _filter_guide_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"], _update_guide_update_guide_component__WEBPACK_IMPORTED_MODULE_9__["UpdateGuideComponent"], _drag_drop_guide_drag_drop_guide_component__WEBPACK_IMPORTED_MODULE_10__["DragDropGuideComponent"], _drag_drop_guide_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_11__["DragDropComponent"], _checkboxes_guide_checkboxes_guide_component__WEBPACK_IMPORTED_MODULE_12__["CheckboxesGuideComponent"], _checkboxes_guide_checkboxes_checkboxes_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxesComponent"], _large_tree_guide_large_tree_guide_component__WEBPACK_IMPORTED_MODULE_14__["LargeTreeGuideComponent"], _large_tree_guide_large_tree_large_tree_component__WEBPACK_IMPORTED_MODULE_15__["LargeTreeComponent"], _redux_guide_redux_guide_component__WEBPACK_IMPORTED_MODULE_16__["ReduxGuideComponent"], _rtl_guide_rtl_guide_component__WEBPACK_IMPORTED_MODULE_17__["RtlGuideComponent"], _rtl_guide_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_18__["RtlComponent"], _custom_fields_guide_custom_fields_guide_component__WEBPACK_IMPORTED_MODULE_19__["CustomFieldsGuideComponent"], _expanding_guide_expanding_guide_component__WEBPACK_IMPORTED_MODULE_20__["ExpandingGuideComponent"], _auto_scroll_guide_auto_scroll_guide_component__WEBPACK_IMPORTED_MODULE_21__["AutoScrollGuideComponent"], _auto_scroll_guide_auto_scroll_auto_scroll_component__WEBPACK_IMPORTED_MODULE_22__["AutoScrollComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_3__["CodeExampleModule"],
            angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]
    })
], GuidesModule);



/***/ }),

/***/ "RSg8":
/*!*************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/rtl-guide/rtl/rtl.component.ts ***!
  \*************************************************************************/
/*! exports provided: RtlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlComponent", function() { return RtlComponent; });
/* harmony import */ var _raw_loader_rtl_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./rtl.component.html */ "Xshl");
/* harmony import */ var _rtl_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl.component.scss */ "oPKR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let RtlComponent = class RtlComponent {
    constructor() {
        this.options = {
            rtl: true
        };
        this.nodes = [
            {
                name: 'עץ תיקיות',
                children: [
                    { name: 'קובץ 1' },
                    { name: 'קובץ 2' }
                ]
            },
            {
                name: 'עוד עץ',
                children: [
                    { name: 'עלה', children: [] },
                    { name: 'ענף', children: [
                            { name: 'בן של ענף' }
                        ] }
                ]
            }
        ];
    }
};
RtlComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rtl',
        template: _raw_loader_rtl_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rtl_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], RtlComponent);



/***/ }),

/***/ "RZQe":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/api/api-demo/api-demo.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tree-root\r\n  #tree\r\n  [nodes]=\"nodes\"\r\n  [options]=\"options\"\r\n  [focused]=\"true\"\r\n>\r\n</tree-root>\r\n<p>API:</p>\r\n<button (click)=\"tree.treeModel.focusNextNode()\">next node</button>\r\n<button (click)=\"tree.treeModel.focusPreviousNode()\">previous node</button>\r\n<button (click)=\"tree.treeModel.focusDrillDown()\">drill down</button>\r\n<button (click)=\"tree.treeModel.focusDrillUp()\">drill up</button>\r\n<button (click)=\"options.allowDrag = true\">allowDrag</button>\r\n<p></p>\r\n<button\r\n        [disabled]=\"!tree.treeModel.getFocusedNode()\"\r\n        (click)=\"tree.treeModel.getFocusedNode().toggleActivated()\">\r\n    {{ tree.treeModel.getFocusedNode()?.isActive ? 'deactivate' : 'activate' }}\r\n</button>\r\n<button\r\n        [disabled]=\"!tree.treeModel.getFocusedNode()\"\r\n        (click)=\"tree.treeModel.getFocusedNode().toggleExpanded()\">\r\n    {{ tree.treeModel.getFocusedNode()?.isExpanded ? 'collapse' : 'expand' }}\r\n</button>\r\n<button\r\n        [disabled]=\"!tree.treeModel.getFocusedNode()\"\r\n        (click)=\"tree.treeModel.getFocusedNode().blur()\">\r\n    blur\r\n</button>\r\n<button\r\n        (click)=\"addNode(tree)\">\r\n    Add Node\r\n</button>\r\n<button\r\n        (click)=\"activateSubSub(tree)\">\r\n    Activate inner node\r\n</button>\r\n<button\r\n        (click)=\"tree.treeModel.expandAll()\">\r\n    Expand All\r\n</button>\r\n<button\r\n        (click)=\"tree.treeModel.collapseAll()\">\r\n    Collapse All\r\n</button>\r\n<button\r\n        (click)=\"activeNodes(tree.treeModel)\">\r\n    getActiveNodes()\r\n</button>\r\n");

/***/ }),

/***/ "RyCE":
/*!*****************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/options/options.component.ts ***!
  \*****************************************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _raw_loader_options_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./options.component.html */ "8Vlq");
/* harmony import */ var _options_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.component.scss */ "GKTd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let OptionsComponent = class OptionsComponent {
    constructor() {
        this.options = `
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from '@circlon/angular-tree-component';

class MyComponent {
  ...
  options: ITreeOptions = {
    displayField: 'nodeName',
    isExpandedField: 'expanded',
    idField: 'uuid',
    hasChildrenField: 'nodes',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        }
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    allowDragoverStyling: true,
    levelPadding: 10,
    useVirtualScroll: true,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    scrollContainer: document.documentElement // HTML
  }
}
`;
    }
    ngOnInit() {
    }
};
OptionsComponent.ctorParameters = () => [];
OptionsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-options',
        template: _raw_loader_options_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_options_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], OptionsComponent);



/***/ }),

/***/ "SH0N":
/*!*************************************************************************!*\
  !*** ./projects/docs-app/src/app/layout/nav-item/nav-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var _raw_loader_nav_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nav-item.component.html */ "LVmU");
/* harmony import */ var _nav_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-item.component.scss */ "GBvE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let NavItemComponent = class NavItemComponent {
    constructor() {
        this.isWide = false;
        this.level = 1;
        this.isParentExpanded = true;
        this.isExpanded = false;
        this.isSelected = false;
    }
    ngOnChanges() {
        this.nodeChildren = this.node && this.node.children ? this.node.children.filter(n => !n.hidden) : [];
        if (this.selectedNodes) {
            const ix = this.selectedNodes.find(node => node.title === this.node.title);
            this.isSelected = ix !== undefined; // this node is the selected node or its ancestor
            // TODO: build this nice
            /*
            this.isExpanded = this.isParentExpanded &&
              (this.isSelected || // expand if selected or ...
                // preserve expanded state when display is wide; collapse in mobile.
                (this.isWide && this.isExpanded));
            */
            if (!this.isSelected && this.nodeChildren && this.nodeChildren.length) {
                const selectedChild = this.selectedNodes.find(node => this.nodeChildren.some(child => child.title === node.title));
                this.isSelected = selectedChild !== undefined;
            }
        }
        else {
            this.isSelected = false;
        }
        this.setClasses();
    }
    setClasses() {
        this.classes = {
            ['level-' + this.level]: true,
            collapsed: !this.isExpanded,
            expanded: this.isExpanded,
            selected: this.isSelected
        };
    }
    headerClicked() {
        this.isExpanded = !this.isExpanded;
        this.setClasses();
    }
};
NavItemComponent.propDecorators = {
    isWide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isParentExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectedNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
NavItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nav-item',
        template: _raw_loader_nav_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nav_item_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], NavItemComponent);



/***/ }),

/***/ "V4S9":
/*!*******************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/redux-guide/redux-guide.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReduxGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxGuideComponent", function() { return ReduxGuideComponent; });
/* harmony import */ var _raw_loader_redux_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./redux-guide.component.html */ "gbkQ");
/* harmony import */ var _redux_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux-guide.component.scss */ "If76");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ReduxGuideComponent = class ReduxGuideComponent {
    constructor() {
        this.options = `
options = {
  actionMapping: {
    mouse: {
      drop: (tree: TreeModel, node: TreeNode, $event: any, {from , to}: {from: any, to: any}) => {
        // custom action. parameters: from = node, to = {parent, index}
      }
    }
  }
}`;
    }
};
ReduxGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-redux-guide',
        template: _raw_loader_redux_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_redux_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], ReduxGuideComponent);



/***/ }),

/***/ "WlIa":
/*!***************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/rtl-guide/rtl-guide.component.ts ***!
  \***************************************************************************/
/*! exports provided: RtlGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlGuideComponent", function() { return RtlGuideComponent; });
/* harmony import */ var _raw_loader_rtl_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./rtl-guide.component.html */ "vZ6S");
/* harmony import */ var _rtl_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-guide.component.scss */ "AZBi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let RtlGuideComponent = class RtlGuideComponent {
    constructor() {
        this.html = `<tree-root [focused]="true" [nodes]="nodes" [options]="options"></tree-root>`;
        this.javascript = `
options = {
  rtl: true
};
`;
    }
};
RtlGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rtl-guide',
        template: _raw_loader_rtl_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rtl_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], RtlGuideComponent);



/***/ }),

/***/ "Xe4Q":
/*!*******************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/actions/actions.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "XkNn":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/api/api.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Calling API Methods</h1>\r\n\r\n<h2>Demo</h2>\r\n\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/fundamentals/api/api-demo/api-demo.component.ts\" target=\"_blank\">Source Code</a></p>\r\n\r\n<div class=\"demo-container\">\r\n    <app-api-demo></app-api-demo>\r\n</div>\r\n\r\n<code-example>{{ html }}</code-example>\r\n\r\n<p>Or by accessing the <code>treeNode</code> that is passed through <a [routerLink]=\"['/', 'fundamentals', 'events']\">Events</a> or using <a [routerLink]=\"['/', 'fundamentals', 'actions']\">Action Mapping</a>.</p>\r\n");

/***/ }),

/***/ "Xshl":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/rtl-guide/rtl/rtl.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tree-root [focused]=\"true\" [nodes]=\"nodes\" [options]=\"options\"></tree-root>\r\n");

/***/ }),

/***/ "YkdX":
/*!************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/filter-guide/filter/filter.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ZEtA":
/*!***************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/auto-scroll-guide/auto-scroll/auto-scroll.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvLXNjcm9sbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ZejJ":
/*!*****************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/expanding-guide/expanding-guide.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBhbmRpbmctZ3VpZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ZmsY":
/*!********************************************************************************!*\
  !*** ./projects/docs-app/src/app/getting-started/getting-started.component.ts ***!
  \********************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var _raw_loader_getting_started_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./getting-started.component.html */ "on3k");
/* harmony import */ var _getting_started_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getting-started.component.scss */ "lxQv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let GettingStartedComponent = class GettingStartedComponent {
    constructor() { }
    ngOnInit() {
    }
};
GettingStartedComponent.ctorParameters = () => [];
GettingStartedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-getting-started',
        template: _raw_loader_getting_started_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_getting_started_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], GettingStartedComponent);



/***/ }),

/***/ "bGLL":
/*!***********************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/fundamentals.module.ts ***!
  \***********************************************************************/
/*! exports provided: FundamentalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundamentalsModule", function() { return FundamentalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodes/nodes.component */ "bJ/M");
/* harmony import */ var _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-elements/code/code-example.module */ "DW/B");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/options.component */ "RyCE");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/actions.component */ "x/Xv");
/* harmony import */ var _templates_templates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/templates.component */ "heiO");
/* harmony import */ var _actions_actions_demo_actions_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/actions-demo/actions-demo.component */ "vB2W");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-tree-component */ "EjZu");
/* harmony import */ var _templates_templates_demo_templates_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/templates-demo/templates-demo.component */ "nsof");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/events.component */ "4CxF");
/* harmony import */ var _state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state-binding/state-binding.component */ "Ptc1");
/* harmony import */ var _state_binding_state_binding_demo_state_binding_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state-binding/state-binding-demo/state-binding-demo.component */ "3VUB");
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api/api.component */ "AY8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _api_api_demo_api_demo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api/api-demo/api-demo.component */ "BUJu");
/* harmony import */ var _styling_styling_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styling/styling.component */ "x2C+");
/* harmony import */ var _focus_focus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./focus/focus.component */ "5ic2");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./issues/issues.component */ "zbqq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















let FundamentalsModule = class FundamentalsModule {
};
FundamentalsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_2__["NodesComponent"],
            _options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"],
            _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__["ActionsComponent"],
            _templates_templates_component__WEBPACK_IMPORTED_MODULE_6__["TemplatesComponent"],
            _actions_actions_demo_actions_demo_component__WEBPACK_IMPORTED_MODULE_7__["ActionsDemoComponent"],
            _templates_templates_demo_templates_demo_component__WEBPACK_IMPORTED_MODULE_9__["TemplatesDemoComponent"],
            _events_events_component__WEBPACK_IMPORTED_MODULE_10__["EventsComponent"],
            _state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_11__["StateBindingComponent"],
            _state_binding_state_binding_demo_state_binding_demo_component__WEBPACK_IMPORTED_MODULE_12__["StateBindingDemoComponent"],
            _api_api_component__WEBPACK_IMPORTED_MODULE_13__["ApiComponent"],
            _api_api_demo_api_demo_component__WEBPACK_IMPORTED_MODULE_15__["ApiDemoComponent"],
            _styling_styling_component__WEBPACK_IMPORTED_MODULE_16__["StylingComponent"],
            _focus_focus_component__WEBPACK_IMPORTED_MODULE_17__["FocusComponent"],
            _issues_issues_component__WEBPACK_IMPORTED_MODULE_18__["IssuesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_3__["CodeExampleModule"],
            angular_tree_component__WEBPACK_IMPORTED_MODULE_8__["TreeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]
        ]
    })
], FundamentalsModule);



/***/ }),

/***/ "bJ/M":
/*!*************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/nodes/nodes.component.ts ***!
  \*************************************************************************/
/*! exports provided: NodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodesComponent", function() { return NodesComponent; });
/* harmony import */ var _raw_loader_nodes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nodes.component.html */ "pUKq");
/* harmony import */ var _nodes_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes.component.scss */ "CzPr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let NodesComponent = class NodesComponent {
    constructor() {
        this.nodes = `[
  {
    id: 1,
    name: 'root1',
    children: [
      { id: 2, name: 'child1' },
      { id: 3, name: 'child2' }
    ]
  }
]`;
    }
    ngOnInit() {
    }
};
NodesComponent.ctorParameters = () => [];
NodesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nodes',
        template: _raw_loader_nodes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nodes_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], NodesComponent);



/***/ }),

/***/ "cE78":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/examples/basic-usage/basic-tree/basic-tree.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tree-root [nodes]=\"nodes\"></tree-root>\r\n");

/***/ }),

/***/ "cspZ":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/drag-drop-guide/drag-drop/drag-drop.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Allowing to drag only leaf nodes; ctrl-drag to copy</h4>\r\n<tree-root [state]=\"state\" [options]=\"options\" [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\r\n");

/***/ }),

/***/ "d8W8":
/*!***************************************!*\
  !*** ./projects/docs-app/src/main.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "FAcU");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "x7Jv");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "dDF0":
/*!**********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/checkboxes-guide/checkboxes/checkboxes.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CheckboxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxesComponent", function() { return CheckboxesComponent; });
/* harmony import */ var _raw_loader_checkboxes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./checkboxes.component.html */ "ub+g");
/* harmony import */ var _checkboxes_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxes.component.scss */ "3toA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CheckboxesComponent = class CheckboxesComponent {
    constructor() {
        this.nodes = [
            {
                name: 'root1',
            },
            {
                name: 'root2',
                children: [
                    { name: 'child1' },
                    { name: 'child2', children: [
                            { name: 'grandchild1' },
                            { name: 'grandchild2' }
                        ] }
                ]
            },
            {
                name: 'asyncroot',
                hasChildren: true
            }
        ];
        this.options = {
            useCheckbox: true,
            getChildren: this.getChildren.bind(this)
        };
        this.optionsDisabled = {
            useCheckbox: true,
            getChildren: this.getChildren.bind(this),
            useTriState: false
        };
    }
    getChildren(node) {
        const newNodes = [
            {
                name: 'child1'
            }, {
                name: 'child2'
            }
        ];
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(newNodes), 1000);
        });
    }
};
CheckboxesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-checkboxes',
        template: _raw_loader_checkboxes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_checkboxes_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], CheckboxesComponent);



/***/ }),

/***/ "dEKC":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/expanding-guide/expanding-guide.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Expanding nodes on init</h1>\r\n\r\n<p>A common use case is to start with the tree expanded completely.</p>\r\n<p>You can achieve this by calling <code>treeModel.expandAll()</code> after view init:</p>\r\n\r\n<code-example>{{ allNodes }}</code-example>\r\n\r\n<p>Or to expand / activate specific nodes:</p>\r\n\r\n<code-example>{{ specific }}</code-example>\r\n");

/***/ }),

/***/ "dG/u":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/app.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"toolbar mat-primary\">\r\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\" (click)=\"sidenav.toggle()\">\r\n        <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <mat-icon svgIcon=\"tree-logo\" aria-hidden=\"false\" class=\"main-logo\"></mat-icon>\r\n    <span>Angular Tree Component</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <a href=\"https://github.com/CirclonGroup/angular-tree-component\" title=\"GitHub\" target=\"_blank\" class=\"toolbar-link\">\r\n        <mat-icon svgIcon=\"github\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\r\n    </a>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"sidenav\">\r\n        <div class=\"sidenav-menu\">\r\n            <app-nav-item *ngFor=\"let navEntry of nav\"\r\n                          [node]=\"navEntry\" [selectedNodes]=\"currentNodes\"></app-nav-item>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"sidenav-content\" [ngClass]=\"{'sidenav-open': sidenav.opened}\">\r\n        <main role=\"main\" class=\"main-content\">\r\n            <router-outlet></router-outlet>\r\n        </main>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n<footer>\r\n    <app-footer></app-footer>\r\n</footer>\r\n");

/***/ }),

/***/ "dP2+":
/*!***********************************************************!*\
  !*** ./projects/docs-app/src/app/layout/layout.module.ts ***!
  \***********************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "8qNY");
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-item/nav-item.component */ "SH0N");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__["NavItemComponent"]],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
            _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__["NavItemComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "e007":
/*!*********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/drag-drop-guide/drag-drop/drag-drop.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmFnLWRyb3AuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "e8Lv":
/*!******************************************************!*\
  !*** ./projects/docs-app/src/app/app.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\n  flex: 1 1 auto;\n}\n\n.toolbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);\n}\n\n.toolbar-link {\n  display: flex;\n  align-items: center;\n  padding: 24px;\n  margin: 0 -16px;\n}\n\n.main-logo {\n  padding: 0 8px;\n}\n\n.sidenav-container {\n  min-height: 100%;\n  height: auto;\n  max-width: 100%;\n  margin: 0;\n  transform: none;\n}\n\n.sidenav-container .sidenav {\n  position: fixed;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  min-width: 260px;\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n\n.sidenav-container .sidenav .sidenav-menu :first-child {\n  margin-top: 16px;\n}\n\n.sidenav-container .sidenav .sidenav-menu .menu-item {\n  display: block;\n  max-width: 260px;\n  font-weight: 400;\n  padding-left: 20px;\n}\n\n.sidenav-container .sidenav-content {\n  height: 100%;\n}\n\n.sidenav-container .sidenav-content.sidenav-open {\n  margin-left: 278px;\n}\n\n.sidenav-container .sidenav-content .main-content {\n  min-height: 100vh;\n  padding: 80px 3rem 2rem;\n}\n\nfooter {\n  padding: 48px;\n  font-weight: 300;\n  background-color: #3f51b5;\n  z-index: 0;\n}\n\nfooter .footer-content {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFTTtFQUNFLGdCQUFBO0FBQVI7O0FBR007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRFI7O0FBTUU7RUFDRSxZQUFBO0FBSko7O0FBTUk7RUFDRSxrQkFBQTtBQUpOOztBQU9JO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQUxOOztBQVVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBUEY7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVBKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMyk7XHJcbn1cclxuXHJcbi50b29sYmFyLWxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1hcmdpbjogMCAtMTZweDtcclxufVxyXG5cclxuLm1haW4tbG9nbyB7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcblxyXG4gIC5zaWRlbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjRweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiAyNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCAwIDZweCByZ2JhKDAsMCwwLDAuMSk7XHJcblxyXG4gICAgLnNpZGVuYXYtbWVudSB7XHJcbiAgICAgIDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgJi5zaWRlbmF2LW9wZW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjc4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBwYWRkaW5nOiA4MHB4IDNyZW0gMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgcGFkZGluZzogNDhweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgei1pbmRleDogMDtcclxuXHJcbiAgLmZvb3Rlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAwIDQwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "e8mi":
/*!*************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/actions/actions-demo/actions-demo.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb25zLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "eH7g":
/*!*********************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/update-guide/update-guide.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdateGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGuideComponent", function() { return UpdateGuideComponent; });
/* harmony import */ var _raw_loader_update_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./update-guide.component.html */ "ilQc");
/* harmony import */ var _update_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-guide.component.scss */ "lCK6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let UpdateGuideComponent = class UpdateGuideComponent {
    constructor() {
        this.adding = `
<tree-root #tree nodes="nodes"></tree-root>

class MyComponent {
  nodes = [{ name: 'node' }];

  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  addNode() {
    this.nodes.push({ name: 'another node' });
    this.tree.treeModel.update();
  }
}
`;
        this.immutable = `
<tree-root nodes="nodes"></tree-root>

nodes = [...]

addNode(newNode) {
  // Just add node and replace nodes variable:
  this.nodes = [...this.nodes, newNode];
}
`;
    }
};
UpdateGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-update-guide',
        template: _raw_loader_update_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], UpdateGuideComponent);



/***/ }),

/***/ "ewhR":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/auto-scroll-guide/auto-scroll/auto-scroll.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 500px; overflow: auto;\">\r\n  <div style=\"height: 300px; border: 1px solid grey\">Padding</div>\r\n  <div>\r\n    <tree-root\r\n      #tree\r\n      [nodes]=\"nodes\"\r\n      [options]=\"options\"\r\n      [focused]=\"true\"\r\n    ></tree-root>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "fKsw":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/checkboxes-guide/checkboxes-guide.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Checkboxes</h1>\r\n\r\n<p>You can specify useCheckboxes option to show checkboxes, and the tree selection APIs to control and access which node is currently selected.</p>\r\n\r\n<h2>Demo</h2>\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/guides/checkboxes-guide/checkboxes/checkboxes.component.ts\" target=\"_blank\">Source Code</a></p>\r\n<div class=\"demo-container\">\r\n  <app-checkboxes></app-checkboxes>\r\n</div>\r\n\r\n<p>By default, parent nodes reflect and control the status of children.</p>\r\n<p>If you wish to override this behaviour, specify <code>useTriState: false</code> in the options.</p>\r\n");

/***/ }),

/***/ "fLSB":
/*!***********************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/api/api.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcGkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gabs":
/*!***********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/load-more-example/load-more/load-more.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LoadMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoreComponent", function() { return LoadMoreComponent; });
/* harmony import */ var _raw_loader_load_more_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./load-more.component.html */ "CL1O");
/* harmony import */ var _load_more_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-more.component.scss */ "58ED");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-tree-component */ "EjZu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NodeType;
(function (NodeType) {
    NodeType[NodeType["LoadMore"] = 0] = "LoadMore";
})(NodeType || (NodeType = {}));
let LoadMoreComponent = class LoadMoreComponent {
    constructor() {
        this.options = {
            nodeHeight: 23,
            useVirtualScroll: false,
            getChildren: node => {
                return this.fakeDataService(node.id, this.getCurrentSkip(node.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
                    return this.createNodes(res.nodes, res.total, node.id);
                })).toPromise();
            },
            actionMapping: {
                mouse: {
                    click: (tree, node, $event) => {
                        this.onClickNode(node);
                        angular_tree_component__WEBPACK_IMPORTED_MODULE_5__["TREE_ACTIONS"].ACTIVATE(tree, node, $event);
                    }
                }
            }
        };
        this.nodesToSkip = {};
        this.loadMoreId = 'loadMore';
        this.numberOfNodesToLoad = 100;
        this.nodes = new Array(10).fill(null).map((item, i) => ({
            id: `${i}`,
            name: `loadMoreRoot${i}`,
            hasChildren: true
        }));
    }
    getCurrentSkip(parentNodeId) {
        let currentSkip = 0;
        if (this.nodesToSkip &&
            parentNodeId !== undefined &&
            this.nodesToSkip[parentNodeId]) {
            currentSkip = this.nodesToSkip[parentNodeId].skip;
        }
        return currentSkip;
    }
    createNodes(nodes, total, parentNodeId) {
        const currentSkip = this.getCurrentSkip(parentNodeId);
        // If there are more nodes to load, update skip and add a load-more node to nodes
        if (currentSkip + nodes.length < total) {
            this.addOrUpdateNodeSkip(parentNodeId, nodes.length);
            nodes.push(this.getLoadMoreNode(parentNodeId, this.nodesToSkip[parentNodeId].skip, total));
        }
        return nodes;
    }
    onClickNode(node) {
        if (node.data.type === NodeType.LoadMore) {
            this.loadMoreClicked(node);
        }
    }
    loadMoreClicked(node) {
        node.data.name = 'Loading more nodes';
        const parentNodeId = node.parent.id;
        this.fakeDataService(parentNodeId, this.getCurrentSkip(parentNodeId))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => this.createNodes(response.nodes, response.total, parentNodeId)))
            .subscribe(nodes => {
            // remove load node
            // try fast way of popping last entry before slow filter
            if (node.parent.data.children[node.parent.data.children.length - 1].id ===
                node.data.id) {
                node.parent.data.children.pop();
            }
            else {
                node.parent.data.children = node.parent.data.children.filter(child => child.id !== node.data.id);
            }
            node.parent.data.children = [...node.parent.data.children, ...nodes];
            this.tree.treeModel.update();
            if (this.tree.treeModel.getActiveNode()) {
                this.tree.treeModel.getActiveNode().toggleActivated();
                if (this.tree.treeModel.getFocusedNode()) {
                    this.tree.treeModel.getFocusedNode().blur();
                }
            }
        });
    }
    // this would be your api data call
    fakeDataService(parentId, skipNodes) {
        const nodes = new Array(this.numberOfNodesToLoad).fill(null).map((item, i) => ({
            id: `no-id`,
            name: `node-${parentId}-${skipNodes + i}`,
            hasChildren: false
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
            nodes,
            total: 1000
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000));
    }
    addOrUpdateNodeSkip(nodeId, skip) {
        if (this.nodesToSkip[nodeId]) {
            this.nodesToSkip[nodeId].skip += skip;
        }
        else {
            this.nodesToSkip[nodeId] = { skip };
        }
    }
    getLoadMoreNode(parentId, loaded, totalItems) {
        const remaining = totalItems - loaded;
        return {
            type: NodeType.LoadMore,
            name: `Load more (${remaining} remaining)`,
            id: this.loadMoreId + parentId,
            hasChildren: false
        };
    }
};
LoadMoreComponent.ctorParameters = () => [];
LoadMoreComponent.propDecorators = {
    tree: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['tree',] }]
};
LoadMoreComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-load-more',
        template: _raw_loader_load_more_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_load_more_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], LoadMoreComponent);



/***/ }),

/***/ "gbkQ":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/redux-guide/redux-guide.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Redux / Immutable Data</h1>\r\n\r\n<h2>Use ID</h2>\r\n\r\n<p>Working with the tree using immutable data is possible.</p>\r\n<p>Make sure that:</p>\r\n<ol>\r\n  <li>You provide a unique <code>id</code> property on each node</li>\r\n  <li>If you have a different key property, then set the <code>idField</code> in the options</li>\r\n  <li>You override drop action as stated below</li>\r\n</ol>\r\n\r\n<h2>Override drop action</h2>\r\n<p>Drag and drop by default mutates the children.</p>\r\n<p>If working with immutable data, you must override the action and supply your custom behaviour:</p>\r\n<code-example>{{ options }}</code-example>\r\n\r\n<h2>Rebuilding the tree</h2>\r\n<p>Every time the nodes array changes, the entire tree model is rebuilt.</p>\r\n<p>This might be costly if you have a huge amount of nodes that change very frequently.</p>\r\n");

/***/ }),

/***/ "hHEn":
/*!*******************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/large-tree-guide/large-tree-guide.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXJnZS10cmVlLWd1aWRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "hKYw":
/*!*****************************************************************************!*\
  !*** ./projects/docs-app/src/app/custom-elements/custom-elements.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomElementsModule", function() { return CustomElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _elements_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements-loader */ "8fFk");
/* harmony import */ var _element_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-registry */ "z0PY");
/* harmony import */ var _lazy_custom_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-custom-element.component */ "6cby");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let CustomElementsModule = class CustomElementsModule {
};
CustomElementsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_lazy_custom_element_component__WEBPACK_IMPORTED_MODULE_3__["LazyCustomElementComponent"]],
        exports: [_lazy_custom_element_component__WEBPACK_IMPORTED_MODULE_3__["LazyCustomElementComponent"]],
        providers: [
            _elements_loader__WEBPACK_IMPORTED_MODULE_1__["ElementsLoader"],
            { provide: _element_registry__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN"], useValue: _element_registry__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_MODULE_LOAD_CALLBACKS"] },
        ],
    })
], CustomElementsModule);



/***/ }),

/***/ "hSpG":
/*!*******************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/checkboxes-guide/checkboxes-guide.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveGVzLWd1aWRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "heiO":
/*!*********************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/templates/templates.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesComponent", function() { return TemplatesComponent; });
/* harmony import */ var _raw_loader_templates_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./templates.component.html */ "Fmej");
/* harmony import */ var _templates_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.component.scss */ "NRkf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TemplatesComponent = class TemplatesComponent {
    constructor() {
        this.template = `
<tree-root [nodes]="nodes">
  <ng-template #treeNodeTemplate let-node let-index="index">
    <span>{{ node.data.name }}</span>
    <button (click)="go($event)">Custom Action</button>
  </ng-template>
</tree-root>
`;
        this.treeNodeWrapper = `
<tree-root [nodes]="nodes">
  <ng-template #treeNodeWrapperTemplate let-node let-index="index">
    <div class="node-wrapper" [style.padding-left]="node.getNodePadding()">
      <tree-node-expander [node]="node"></tree-node-expander>
      <div class="node-content-wrapper"
        [class.node-content-wrapper-active]="node.isActive"
        [class.node-content-wrapper-focused]="node.isFocused"
        (click)="node.mouseAction('click', $event)"
        (dblclick)="node.mouseAction('dblClick', $event)"
        (contextmenu)="node.mouseAction('contextMenu', $event)"
        (treeDrop)="node.onDrop($event)"
        [treeAllowDrop]="node.allowDrop"
        [treeDrag]="node"
        [treeDragEnabled]="node.allowDrag()">

        <tree-node-content [node]="node" [index]="index"></tree-node-content>
      </div>
    </div>
  </ng-template>
</tree-root>
`;
        this.treeLoading = `
<tree-root [nodes]="nodes">
  <template #loadingTemplate>Loading, please hold....</template>
</tree-root>
`;
        this.fullTemplate = `
<ng-template #treeNodeFullTemplate
          let-node
          let-index="index"
          let-templates="templates">
  <div
    [class]="node.getClass()"
    [class.tree-node]="true"
    [class.tree-node-expanded]="node.isExpanded && node.hasChildren"
    [class.tree-node-collapsed]="node.isCollapsed && node.hasChildren"
    [class.tree-node-leaf]="node.isLeaf"
    [class.tree-node-active]="node.isActive"
    [class.tree-node-focused]="node.isFocused">

    <tree-node-drop-slot
                         *ngIf="index === 0"
                         [dropIndex]="node.index"
                         [node]="node.parent">
    </tree-node-drop-slot>

    <tree-node-wrapper [node]="node" [index]="index" [templates]="templates">
    </tree-node-wrapper>

    <tree-node-children [node]="node" [templates]="templates">
    </tree-node-children>
    <tree-node-drop-slot [dropIndex]="node.index + 1" [node]="node.parent">
    </tree-node-drop-slot>
  </div>
</ng-template>
`;
    }
};
TemplatesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-templates',
        template: _raw_loader_templates_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_templates_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], TemplatesComponent);



/***/ }),

/***/ "hjlW":
/*!*******************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/async-guide/async-guide.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AsyncGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncGuideComponent", function() { return AsyncGuideComponent; });
/* harmony import */ var _raw_loader_async_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./async-guide.component.html */ "DF1i");
/* harmony import */ var _async_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-guide.component.scss */ "MF7w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AsyncGuideComponent = class AsyncGuideComponent {
    constructor() {
        this.javascript = `
options = {
  getChildren: (node:TreeNode) => {
    return request('/api/children/' + node.id);
  }
}

nodes = [
  {
    name: 'asyncRoot',
    hasChildren: true
  },
  {
    name: 'root2',
    children: [
      {
        name: 'leaf',
        hasChildren: false
      }
    ]
  }
]
`;
    }
};
AsyncGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-async-guide',
        template: _raw_loader_async_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_async_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], AsyncGuideComponent);



/***/ }),

/***/ "ilQc":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/update-guide/update-guide.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Updating the tree</h1>\r\n\r\n<h2>Changing node attributes</h2>\r\n<p>Changing any attributes on the node itself will be reflected immediately, since change detection will force the tree node components to re-render.</p>\r\n\r\n<h2>Adding / Removing nodes</h2>\r\n<p>After adding or removing nodes from the tree, one must call the <code>update</code> method on the treeModel for it to take affect.</p>\r\n<p>For example:</p>\r\n<code-example>{{ adding }}</code-example>\r\n<p>This is due to the fact that the treeModel builds its own model around the nodes data, to calculate node levels, paths, parent links etc. So it must be informed of any change to the nodes' structure.</p>\r\n<p>Calling update will have no effect on the tree status, i.e. current selected node, current focused node, current expanded nodes, etc.</p>\r\n\r\n<h2>Working with immutable data</h2>\r\n<p>\r\n  Changing the reference to nodes will also trigger an <code>update</code> automatically.\r\n  So if you work for example with immutable data and replace the nodes array instead of mutating it - there is no need to call any method.\r\n</p>\r\n<code-example>{{ immutable }}</code-example>\r\n");

/***/ }),

/***/ "jvAB":
/*!*******************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/drag-drop-guide/drag-drop/drag-drop.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DragDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony import */ var _raw_loader_drag_drop_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./drag-drop.component.html */ "cspZ");
/* harmony import */ var _drag_drop_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-drop.component.scss */ "e007");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "4USb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let DragDropComponent = class DragDropComponent {
    constructor() {
        this.state = {
            expandedNodeIds: {
                1: true,
                2: true
            },
            hiddenNodeIds: {},
            activeNodeIds: {}
        };
        this.options = {
            allowDrag: (node) => node.isLeaf,
            getNodeClone: (node) => (Object.assign(Object.assign({}, node.data), { id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(), name: `copy of ${node.data.name}` }))
        };
        this.nodes = [
            {
                id: 1,
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                id: 2,
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
    }
};
DragDropComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-drag-drop',
        template: _raw_loader_drag_drop_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_drag_drop_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], DragDropComponent);



/***/ }),

/***/ "l5w9":
/*!************************************************************!*\
  !*** ./projects/docs-app/src/app/shared/copier.service.ts ***!
  \************************************************************/
/*! exports provided: CopierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopierService", function() { return CopierService; });
/**
 * This class is based on the code in the following projects:
 *
 * - https://github.com/zenorocha/select
 * - https://github.com/zenorocha/clipboard.js/
 *
 * Both released under MIT license - © Zeno Rocha
 *
 * It is also influenced by the Angular CDK `PendingCopy` class:
 * https://github.com/angular/components/blob/master/src/cdk/clipboard/pending-copy.ts
 */
class CopierService {
    /**
     * Copy the contents of a `<textarea>` element to the clipboard.
     *
     * NOTE: For this method to work, the elements must be already inserted into the DOM.
     *
     * @param textArea The area containing the text to be copied to the clipboard.
     * @return Whether the copy operation was successful.
     */
    copyTextArea(textArea) {
        const currentFocus = document.activeElement;
        try {
            textArea.select();
            textArea.setSelectionRange(0, textArea.value.length);
            return document.execCommand('copy');
        }
        catch (_a) {
            return false;
        }
        finally {
            // Calling `.select()` on the `<textarea>` element may have also focused it.
            // Change the focus back to the previously focused element.
            currentFocus === null || currentFocus === void 0 ? void 0 : currentFocus.focus();
        }
    }
    /**
     * Create a temporary, hidden `<textarea>` element and set its value to the specified text.
     *
     * @param text The text to be inserted into the textarea.
     * @return The temporary `<textarea>` element containing the specified text.
     */
    createTextArea(text) {
        const docElem = document.documentElement;
        const isRTL = docElem.getAttribute('dir') === 'rtl';
        // Create a temporary element to hold the contents to copy.
        const textArea = document.createElement('textarea');
        const style = textArea.style;
        // Prevent zooming on iOS.
        style.fontSize = '12pt';
        // Reset box model.
        style.border = '0';
        style.padding = '0';
        style.margin = '0';
        // Make the element invisible and move it out of screen horizontally.
        style.opacity = '0';
        style.position = 'fixed';
        style.top = '0';
        style[isRTL ? 'right' : 'left'] = '-999em';
        textArea.setAttribute('aria-hidden', 'true');
        textArea.setAttribute('readonly', '');
        textArea.value = text;
        return textArea;
    }
    /**
     * Copy the specified text to the clipboard.
     *
     * @param text The text to be copied to the clipboard.
     * @return Whether the copy operation was successful.
     */
    copyText(text) {
        // Create a `<textarea>` element with the specified text.
        const textArea = this.createTextArea(text);
        // Insert it into the DOM.
        document.body.appendChild(textArea);
        // Copy its contents to the clipboard.
        const success = this.copyTextArea(textArea);
        // Remove it from the DOM, so it can be garbage-collected.
        if (textArea.parentNode) {
            // We cannot use ChildNode.remove() because of IE11.
            textArea.parentNode.removeChild(textArea);
        }
        return success;
    }
}


/***/ }),

/***/ "lCK6":
/*!***********************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/update-guide/update-guide.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtZ3VpZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "lQNf":
/*!***********************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/crud-example/crud-example.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CrudExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudExampleComponent", function() { return CrudExampleComponent; });
/* harmony import */ var _raw_loader_crud_example_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./crud-example.component.html */ "9+HR");
/* harmony import */ var _crud_example_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-example.component.scss */ "zjWo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CrudExampleComponent = class CrudExampleComponent {
    constructor() { }
    ngOnInit() {
    }
};
CrudExampleComponent.ctorParameters = () => [];
CrudExampleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-crud-example',
        template: _raw_loader_crud_example_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crud_example_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], CrudExampleComponent);



/***/ }),

/***/ "lxQv":
/*!**********************************************************************************!*\
  !*** ./projects/docs-app/src/app/getting-started/getting-started.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "mHhP":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/examples/columns-example/columns-example.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Tree with columns</h1>\r\n\r\n<h2>Working tree</h2>\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/examples/columns-example/columns/columns.component.ts\" target=\"_blank\">Source Code</a></p>\r\n<div class=\"demo-container\">\r\n  <app-columns></app-columns>\r\n</div>\r\n\r\n<h2>How to implement</h2>\r\n\r\n<p>To create columns inside the tree we need to use the templating options of the tree and style them with css.</p>\r\n<p>\r\n  The example component contains two parts. The header and the tree itself. The header is responsible for displaying the column header.\r\n  This is needed to give the tree the grid style. If you just want the tree to have columns without any header you don't need to build a header.\r\n</p>\r\n\r\n<h3>#treeNodeWrapperTemplate</h3>\r\n<p>\r\n  To show the tree in columns it's not needed to use the full templating option. But at least the <code>treeNodeWrapperTemplate</code> is needed.\r\n  See also the <a [routerLink]=\"['/', 'fundamentals', 'templates']\">Template Fundamentals</a>.\r\n</p>\r\n\r\n<h3>Column definition</h3>\r\n<p>\r\n  The example uses a simple array <code>columns = ['city', 'zipCode']</code> to handle the columns.\r\n  This array includes the property names that should be shown as columns and does not include the name, which is the first column.\r\n  The name is handled differently as seen in the example. The columns array is just looped over and shown.\r\n  In a more advanced example you could have the columns array as an input and also handle the name dynamically.\r\n</p>\r\n");

/***/ }),

/***/ "md+Y":
/*!**********************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/filter-guide/filter/filter.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _raw_loader_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./filter.component.html */ "9NPp");
/* harmony import */ var _filter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.component.scss */ "YkdX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FilterComponent = class FilterComponent {
    constructor() {
        this.options = {
            useCheckbox: true
        };
        this.nodes = [
            {
                name: 'North America',
                children: [
                    { name: 'United States', children: [
                            { name: 'New York' },
                            { name: 'California' },
                            { name: 'Florida' }
                        ] },
                    { name: 'Canada' }
                ]
            },
            {
                name: 'South America',
                children: [
                    { name: 'Argentina', children: [] },
                    { name: 'Brazil' }
                ]
            },
            {
                name: 'Europe',
                children: [
                    { name: 'England' },
                    { name: 'Germany' },
                    { name: 'France' },
                    { name: 'Italy' },
                    { name: 'Spain' }
                ]
            }
        ];
    }
    filterFn(value, treeModel) {
        treeModel.filterNodes((node) => fuzzysearch(value, node.data.name));
    }
};
FilterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-filter',
        template: _raw_loader_filter_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_filter_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], FilterComponent);

function fuzzysearch(needle, haystack) {
    const haystackLC = haystack.toLowerCase();
    const needleLC = needle.toLowerCase();
    const hlen = haystack.length;
    const nlen = needleLC.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needleLC === haystackLC;
    }
    outer: for (let i = 0, j = 0; i < nlen; i++) {
        const nch = needleLC.charCodeAt(i);
        while (j < hlen) {
            if (haystackLC.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}


/***/ }),

/***/ "nT2r":
/*!********************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/crud-example/crud/crud.component.ts ***!
  \********************************************************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var _raw_loader_crud_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./crud.component.html */ "sx29");
/* harmony import */ var _crud_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.component.scss */ "DKwI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-tree-component */ "EjZu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let CrudComponent = class CrudComponent {
    constructor() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
        this.options = {
            displayField: 'name',
            useVirtualScroll: false,
            nodeHeight: 25,
            allowDrag: false,
            allowDrop: false
        };
    }
    onActivateNode(event) {
        this.selectedNode = event.node.data;
        // Do stuff with selected node
    }
    copyNode(node, tree) {
        const parentNode = node.realParent ? node.realParent : node.treeModel.virtualRoot;
        const copyNode = JSON.stringify(node.data);
        const newNode = JSON.parse(copyNode);
        this.deleteIds(newNode);
        parentNode.data.children.push(newNode);
        tree.treeModel.update();
    }
    deleteIds(node) {
        node.id = null;
        if (node.children) {
            node.children.forEach(child => this.deleteIds(child));
        }
    }
    addNode(node) {
        const newNode = { name: 'new item' };
        if (!node.data.children) {
            node.data.children = [];
        }
        node.data.children.push(newNode);
        this.tree.treeModel.update();
        const someNode = this.tree.treeModel.getNodeById(node.id);
        someNode.expand();
    }
    deleteNode(node, tree) {
        var _a;
        const parentNode = node.realParent ? node.realParent : node.treeModel.virtualRoot;
        parentNode.data.children = parentNode.data.children.filter(child => {
            return child !== node.data;
        });
        tree.treeModel.update();
        if (node && node.parent && node.parent.data && node.parent.data.children.length === 0) {
            node.parent.data.hasChildren = false;
        }
        if (((_a = this.selectedNode) === null || _a === void 0 ? void 0 : _a.id) === node.data.id) {
            this.selectedNode = null;
        }
    }
};
CrudComponent.propDecorators = {
    tree: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['tree',] }]
};
CrudComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-crud',
        template: _raw_loader_crud_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crud_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], CrudComponent);



/***/ }),

/***/ "nsof":
/*!*****************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/templates/templates-demo/templates-demo.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TemplatesDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesDemoComponent", function() { return TemplatesDemoComponent; });
/* harmony import */ var _raw_loader_templates_demo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./templates-demo.component.html */ "7D0X");
/* harmony import */ var _templates_demo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates-demo.component.scss */ "KE/T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TemplatesDemoComponent = class TemplatesDemoComponent {
    constructor() {
        this.nodes1 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class',
                hasChildren: true
            }
        ];
        this.nodes2 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class',
                children: [
                    { title: 'child1', className: 'child1Class' }
                ]
            }
        ];
        this.options1 = {
            getChildren: () => new Promise((resolve, reject) => { })
        };
        this.options0 = {
            displayField: 'title',
            nodeClass: (node) => `${node.data.title}Class`
        };
    }
};
TemplatesDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-templates-demo',
        template: _raw_loader_templates_demo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_templates_demo_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], TemplatesDemoComponent);



/***/ }),

/***/ "oPKR":
/*!***************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/rtl-guide/rtl/rtl.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydGwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "on3k":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/getting-started/getting-started.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Getting Started</h1>\r\n\r\n<p>This page will help you get started with angular-tree-component. You'll be up and running in a jiffy! This project is completely free and open to use under the MIT license.</p>\r\n\r\n<h2>Slack Community</h2>\r\n\r\n<p>The best way to get support from the community: <a href=\"https://angular-tree-component.herokuapp.com/\" target=\"_blank\">https://angular-tree-component.herokuapp.com/</a></p>\r\n\r\n<h2>Supported Angular Versions</h2>\r\n\r\n<p>We follow the Angular Versions. Version 10 of the angular-tree-component supports Angular 10, Version 9 of the tree Angular 9.<br>\r\n    Please note that ownership of the tree changed between Version 8 and 9. We will focus all new development on Version 9 and up.</p>\r\n\r\n<h2>Installation</h2>\r\n\r\n<h3>Angular 9 and up</h3>\r\n\r\n<h4>Installing with npm</h4>\r\n\r\n<code-example language=\"sh\">npm install @circlon/angular-tree-component --save</code-example>\r\n\r\n<h4>Installing with yarn</h4>\r\n\r\n<code-example language=\"sh\">yarn add @circlon/angular-tree-component</code-example>\r\n\r\n<h4>Import css</h4>\r\n\r\n<p>Add styles to your <code>styles.scss</code>:</p>\r\n\r\n<code-example language=\"sh\">@import '~@circlon/angular-tree-component/css/angular-tree-component.css';</code-example>\r\n\r\n<h4>Import TreeModule</h4>\r\n\r\n<p>Import the TreeModule into your <code>app.module.ts</code>:</p>\r\n\r\n<code-example language=\"sh\">imports: [TreeModule]</code-example>\r\n\r\n<hr>\r\n\r\n<h3>Angular 8 and down</h3>\r\n\r\n<h4>Installing with npm</h4>\r\n\r\n<code-example language=\"sh\">npm install angular-tree-component --save</code-example>\r\n\r\n<h4>Installing with yarn</h4>\r\n\r\n<code-example language=\"sh\">yarn add angular-tree-component</code-example>\r\n\r\n<h4>Import css</h4>\r\n\r\n<p>Add styles to your <code>styles.scss</code>:</p>\r\n\r\n<code-example language=\"sh\">@import '~angular-tree-component/dist/angular-tree-component.css';</code-example>\r\n\r\n<h4>Import TreeModule</h4>\r\n\r\n<p>Import the TreeModule into your <code>app.module.ts</code>:</p>\r\n\r\n<code-example language=\"sh\">imports: [TreeModule.forRoot()]</code-example>\r\n");

/***/ }),

/***/ "pUKq":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/fundamentals/nodes/nodes.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Nodes</h1>\r\n\r\n<p>Inputs to Tree component:</p>\r\n\r\n<code-example>&lt;tree-root [nodes]=nodes [options]=\"options\"&gt;&lt;/tree-root&gt;</code-example>\r\n\r\n<h2>nodes</h2>\r\n\r\n<p>Array of root nodes of the tree.</p>\r\n<p>Each node may contain the following fields:</p>\r\n\r\n<table>\r\n    <tr>\r\n        <th>Property</th>\r\n        <th>Description</th>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>id</td>\r\n        <td>\r\n            Unique ID for the node.<br>\r\n            If one is not supplied it will be created by the tree library.\r\n        </td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>name</td>\r\n        <td>Will be displayed by default in the tree.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>children</td>\r\n        <td>An array of the node's children.<br>\r\n            Each child is an object with the same structure as the parent node.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>hasChildren</td>\r\n        <td>For async data load. Denotes that this node might have children, even when 'children' attr is empty.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>isExpanded</td>\r\n        <td>Determines whether the node starts as expanded by default. Notice that this field is not bindable, meaning that changing it doesn't affect the tree and vice versa.</td>\r\n    </tr>\r\n</table>\r\n\r\n<p>Example:</p>\r\n\r\n<code-example language=\"json\">{{ nodes }}</code-example>\r\n\r\n<h2>Focused</h2>\r\n\r\n<p>Whether the tree should be focused. Key navigation only works when the tree is focused.</p>\r\n<p>Default value: <code>false</code>.</p>\r\n");

/***/ }),

/***/ "pUSG":
/*!*******************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/auto-scroll-guide/auto-scroll-guide.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AutoScrollGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScrollGuideComponent", function() { return AutoScrollGuideComponent; });
/* harmony import */ var _raw_loader_auto_scroll_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auto-scroll-guide.component.html */ "vlfB");
/* harmony import */ var _auto_scroll_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-scroll-guide.component.scss */ "7Ih2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AutoScrollGuideComponent = class AutoScrollGuideComponent {
};
AutoScrollGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-auto-scroll-guide',
        template: _raw_loader_auto_scroll_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auto_scroll_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], AutoScrollGuideComponent);



/***/ }),

/***/ "pWJv":
/*!************************************************************************!*\
  !*** ./projects/docs-app/$$_lazy_route_resource lazy namespace object ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "pWJv";

/***/ }),

/***/ "qEib":
/*!*********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/load-more-example/load-more-example.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LoadMoreExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoreExampleComponent", function() { return LoadMoreExampleComponent; });
/* harmony import */ var _raw_loader_load_more_example_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./load-more-example.component.html */ "2qCB");
/* harmony import */ var _load_more_example_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-more-example.component.scss */ "JNNt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LoadMoreExampleComponent = class LoadMoreExampleComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadMoreExampleComponent.ctorParameters = () => [];
LoadMoreExampleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-load-more-example',
        template: _raw_loader_load_more_example_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_load_more_example_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], LoadMoreExampleComponent);



/***/ }),

/***/ "qaL4":
/*!*************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/auto-scroll-guide/auto-scroll/auto-scroll.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AutoScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScrollComponent", function() { return AutoScrollComponent; });
/* harmony import */ var _raw_loader_auto_scroll_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auto-scroll.component.html */ "ewhR");
/* harmony import */ var _auto_scroll_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-scroll.component.scss */ "ZEtA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AutoScrollComponent = class AutoScrollComponent {
    constructor() {
        this.nodes = [];
        this.options = {
            scrollContainer: document.body.parentElement
        };
    }
    ngOnInit() {
        for (let i = 0; i < 200; i++) {
            this.nodes.push({
                name: `rootDynamic${i}`,
                subTitle: `root created dynamically ${i}`
            });
        }
    }
};
AutoScrollComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-auto-scroll',
        template: _raw_loader_auto_scroll_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auto_scroll_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], AutoScrollComponent);



/***/ }),

/***/ "qkpM":
/*!***************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/expanding-guide/expanding-guide.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ExpandingGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandingGuideComponent", function() { return ExpandingGuideComponent; });
/* harmony import */ var _raw_loader_expanding_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./expanding-guide.component.html */ "dEKC");
/* harmony import */ var _expanding_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expanding-guide.component.scss */ "ZejJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ExpandingGuideComponent = class ExpandingGuideComponent {
    constructor() {
        this.allNodes = `
<tree-root #tree [nodes]="nodes"></tree-root>

@Component {
  nodes = [...];
  @ViewChild('tree') tree;

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }
}`;
        this.specific = `
<tree-root #tree [nodes]="nodes"></tree-root>

@Component {
  nodes = [...];
  @ViewChild('tree') tree;

  ngAfterViewInit() {
    const someNode = this.tree.treeModel.getNodeById('someId');
    someNode.expand();

    const firstRoot = this.tree.treeModel.roots[0];
    firstRoot.setActiveAndVisible();
  }
}`;
    }
};
ExpandingGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-expanding-guide',
        template: _raw_loader_expanding_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_expanding_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], ExpandingGuideComponent);



/***/ }),

/***/ "sGd5":
/*!*******************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/columns-example/columns-example.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2x1bW5zLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "smvT":
/*!**********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/large-tree-guide/large-tree/large-tree.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LargeTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeTreeComponent", function() { return LargeTreeComponent; });
/* harmony import */ var _raw_loader_large_tree_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./large-tree.component.html */ "7tVa");
/* harmony import */ var _large_tree_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./large-tree.component.scss */ "tPFe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LargeTreeComponent = class LargeTreeComponent {
    constructor() {
        this.options = {
            nodeHeight: 23,
            useVirtualScroll: true
        };
        this.nodes = new Array(1000).fill(null).map((item, i) => ({
            id: `${i}`,
            name: `rootDynamic${i}`,
            children: new Array(100).fill(null).map((item, n) => ({
                id: `${i}.${n}`,
                name: `rootChildDynamic${i}.${n}`
            }))
        }));
    }
};
LargeTreeComponent.ctorParameters = () => [];
LargeTreeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-large-tree',
        template: _raw_loader_large_tree_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_large_tree_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], LargeTreeComponent);



/***/ }),

/***/ "sx29":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/examples/crud-example/crud/crud.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tree-root #tree [nodes]=\"nodes\" [options]=\"options\"\r\n           (activate)=\"onActivateNode($event)\">\r\n  <ng-template #treeNodeTemplate let-node let-index=\"index\">\r\n    <div class=\"tree-node-content\">\r\n      <div>\r\n        <span>{{node.data.name}}</span>\r\n      </div>\r\n      <div>\r\n        <button (click)=\"copyNode(node, tree)\">Copy</button>\r\n        <button (click)=\"addNode(node)\">Add</button>\r\n        <button (click)=\"deleteNode(node, tree)\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</tree-root>\r\n");

/***/ }),

/***/ "tPFe":
/*!************************************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/large-tree-guide/large-tree/large-tree.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXJnZS10cmVlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ub+g":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/checkboxes-guide/checkboxes/checkboxes.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>tri-state checkboxes</h3>\r\n<tree-root\r\n  id=\"tree1\"\r\n  [nodes]=\"nodes\"\r\n  [options]=\"options\">\r\n</tree-root>\r\n<h3>The tree is using flexbox.<br>\r\n  Switch expander and checkbox with CSS 'order' attribute:</h3>\r\n<tree-root\r\n  class=\"reverse\"\r\n  id=\"tree2\"\r\n  [nodes]=\"nodes\"\r\n  [options]=\"options\">\r\n</tree-root>\r\n<h3>Disable tri-state checkboxes</h3>\r\n<tree-root\r\n  id=\"tree3\"\r\n  [nodes]=\"nodes\"\r\n  [options]=\"optionsDisabled\">\r\n</tree-root>\r\n");

/***/ }),

/***/ "uvPO":
/*!***********************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/filter-guide/filter-guide.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItZ3VpZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "vB2W":
/*!***********************************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/actions/actions-demo/actions-demo.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ActionsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsDemoComponent", function() { return ActionsDemoComponent; });
/* harmony import */ var _raw_loader_actions_demo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./actions-demo.component.html */ "E6d+");
/* harmony import */ var _actions_demo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions-demo.component.scss */ "e8mi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-tree-component */ "EjZu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ActionsDemoComponent = class ActionsDemoComponent {
    constructor() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    {
                        name: 'child1'
                    }, {
                        name: 'child2'
                    }
                ]
            },
            {
                name: 'root2',
                children: [
                    {
                        name: 'child2.1'
                    }, {
                        name: 'child2.2',
                        children: [
                            {
                                id: 1001,
                                name: 'subsub'
                            }
                        ]
                    }
                ]
            }
        ];
        this.actionMapping = {
            mouse: {
                contextMenu: (tree, node, $event) => {
                    $event.preventDefault();
                    alert(`context menu for ${node.data.name}`);
                },
                dblClick: (tree, node, $event) => {
                    if (node.hasChildren) {
                        angular_tree_component__WEBPACK_IMPORTED_MODULE_3__["TREE_ACTIONS"].TOGGLE_EXPANDED(tree, node, $event);
                    }
                },
                click: (tree, node, $event) => {
                    $event.shiftKey
                        ? angular_tree_component__WEBPACK_IMPORTED_MODULE_3__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(tree, node, $event)
                        : angular_tree_component__WEBPACK_IMPORTED_MODULE_3__["TREE_ACTIONS"].TOGGLE_ACTIVE(tree, node, $event);
                },
                mouseOver: (tree, node, $event) => {
                    $event.preventDefault();
                    console.log(`mouseOver ${node.data.name}`);
                },
                mouseOut: (tree, node, $event) => {
                    $event.preventDefault();
                    console.log(`mouseOut ${node.data.name}`);
                }
            },
            keys: {
                [angular_tree_component__WEBPACK_IMPORTED_MODULE_3__["KEYS"].ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
            }
        };
        this.options = {
            actionMapping: this.actionMapping
        };
    }
};
ActionsDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-actions-demo',
        template: _raw_loader_actions_demo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_actions_demo_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], ActionsDemoComponent);



/***/ }),

/***/ "vZ6S":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/rtl-guide/rtl-guide.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>RTL</h1>\r\n<p>You can make the tree right to left easily by supplying an 'rtl' boolean option.</p>\r\n\r\n<h2>Demo</h2>\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/guides/rtl-guide/rtl/rtl.component.ts\" target=\"_blank\">Source Code</a></p>\r\n<div class=\"demo-container\">\r\n  <app-rtl></app-rtl>\r\n</div>\r\n\r\n<code-example [header]=\"'html'\">{{ html }}</code-example>\r\n<code-example [header]=\"'typescript'\">{{ javascript }}</code-example>\r\n");

/***/ }),

/***/ "vlfB":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/auto-scroll-guide/auto-scroll-guide.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Auto Scrolling</h1>\r\n\r\n<p>When navigating with keys or clicking a node in the edges of the screen, the tree will automatically try to scroll the selected node into view.</p>\r\n<p>Also, you can call <code>scrollIntoView</code> on any node to make it visible.</p>\r\n\r\n<h2>Inner Scroll</h2>\r\n<p>Auto scrolling is built-in to the tree. Simply wrap the tree with a container that has a height and you're good.</p>\r\n<p>The tree has an inner element called viewport that is scrollable.</p>\r\n\r\n<h2>External Scroll (Scrolling as part of the body / other container)</h2>\r\n<p>Sometimes you don't want to wrap the tree with a scrollable container, and want the scrolling to be part of a different element.</p>\r\n<p>Use the <code>scrollContainer</code> option for this purpose as described in <a [routerLink]=\"['/', 'fundamentals', 'options']\">Options</a></p>\r\n\r\n<h2>Demo of scrollContainer</h2>\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/guides/auto-scroll-guide/auto-scroll/auto-scroll.component.ts\" target=\"_blank\">Source Code</a></p>\r\n<div class=\"demo-container\">\r\n  <app-auto-scroll></app-auto-scroll>\r\n</div>\r\n");

/***/ }),

/***/ "x/Xv":
/*!*****************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/actions/actions.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var _raw_loader_actions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./actions.component.html */ "CVsQ");
/* harmony import */ var _actions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.component.scss */ "Xe4Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ActionsComponent = class ActionsComponent {
    constructor() {
        this.actionMapping = `
import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

const actionMapping: IActionMapping = {
  mouse: {
    click: TREE_ACTIONS.TOGGLE_SELECTED_MULTI
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(\`This is \${node.data.name\}\`)
  }
}
`;
        this.mouseActions = `
import { TREE_ACTIONS, IActionMapping } from 'angular-tree-component';

actionMapping: IActionMapping = {
  mouse: {
    dblClick: (tree, node, $event) => // Open a modal with node content,
    click: TREE_ACTIONS.TOGGLE_SELECTED_MULTI,
  }
}
`;
        this.keys = `
KEYS = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  SPACE: 32
}
`;
        this.keysExample = `
import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

actionMapping:IActionMapping = {
  keys: {
    127: (tree, node, $event) => // do something to delete the node,
    [KEYS.ENTER]: TREE_ACTIONS.EXPAND
  }
}
`;
        this.defaultMapping = `
const defaultActionMapping: IActionMapping = {
  mouse: {
    click: TREE_ACTIONS.TOGGLE_ACTIVE,
    dblClick: null,
    contextMenu: null,
    expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
    checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,
    drop: TREE_ACTIONS.MOVE_NODE
  },
  keys: {
    [KEYS.RIGHT]: TREE_ACTIONS.DRILL_DOWN,
    [KEYS.LEFT]: TREE_ACTIONS.DRILL_UP,
    [KEYS.DOWN]: TREE_ACTIONS.NEXT_NODE,
    [KEYS.UP]: TREE_ACTIONS.PREVIOUS_NODE,
    [KEYS.SPACE]: TREE_ACTIONS.TOGGLE_ACTIVE,
    [KEYS.ENTER]: TREE_ACTIONS.TOGGLE_ACTIVE
  }
};
`;
    }
};
ActionsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-actions',
        template: _raw_loader_actions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_actions_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], ActionsComponent);



/***/ }),

/***/ "x0/P":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/docs-app/src/app/guides/large-tree-guide/large-tree-guide.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Large Trees & Virtual Scroll</h1>\r\n\r\n<p>When having a large amount of nodes and experiencing performance issues, it is recommended to use the virtual scroll option.</p>\r\n<p>To use this option, one must supply the height of the container, and the height of each node in the tree.</p>\r\n<p>You can also specify height for the dropSlot which is located between nodes.</p>\r\n<p>Example:</p>\r\n\r\n<code-example [header]=\"'html'\">{{ html }}</code-example>\r\n<code-example [header]=\"'typescript'\">{{ javascript }}</code-example>\r\n\r\n<h2>Hidden trees</h2>\r\n<p>\r\n  If the tree is hidden (for example inside tab or modal), it will not be rendered when it becomes visible.\r\n  After it becomes visible (preferably using setTimeout) - you need to call <code>tree.sizeChanged()</code>, which recalculates the rendered nodes according to the actual viewport size.\r\n</p>\r\n\r\n<h2>Demo</h2>\r\n<p>Initializing 100,000 nodes, please be patient...</p>\r\n<p><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/projects/docs-app/src/app/guides/large-tree-guide/large-tree/large-tree.component.ts\" target=\"_blank\">Source Code</a></p>\r\n<div class=\"demo-container\">\r\n  <app-large-tree></app-large-tree>\r\n</div>\r\n");

/***/ }),

/***/ "x2C+":
/*!*****************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/styling/styling.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StylingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingComponent", function() { return StylingComponent; });
/* harmony import */ var _raw_loader_styling_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./styling.component.html */ "LAbQ");
/* harmony import */ var _styling_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styling.component.scss */ "6l60");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let StylingComponent = class StylingComponent {
    constructor() {
        this.branchLines = `
.node-content-wrapper, .tree-children {
  position: relative;
}

.node-content-wrapper::before, .tree-children::after {
  content: "";
  position: absolute;
}

.node-content-wrapper::before {
  border-bottom: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  height: 28px;
  top: -17px;
  width: 20px;
  left: -28px;
}

.tree-node-level-1 > tree-node-wrapper > .node-wrapper > .node-content-wrapper::before {
  display: none;
}

.tree-node-leaf > .node-wrapper > .node-content-wrapper::before {
  width: 25px;
}

.tree-children::after {
  border-left: 1px solid lightgrey;
  height: 100%;
  top: -15px;
  left: -15px;
}

tree-node:last-child > .tree-node > .tree-children::after {
  border-left: none;
}

.toggle-children {
  z-index: 1;
}
`;
        this.pullRight = `
.tree {
  width: 300px;
}

.node-content-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}

.node-content-wrapper {
  flex-grow: 1;
  position: relative;
}

.pull-right {
  position: absolute;
  right: 10px;
}
`;
        this.ace = `
div.tree div.tree-children::before,
div.tree::before {
    content: "";
    position: absolute;
    border-left: 1px dotted #23527c;
    height: 100%;
    top: -14px;
    left: 12px
}

div.tree {
    padding-left: 0;
    margin-left: -5px
}

div.tree div.tree-children {
    position: relative;
    padding-left: 0;
    margin-left: 16px
}

div.tree div.tree-children::before {
    left: 5px
}

div.tree tree-node>div>.node-wrapper {
    margin-left: 24px
}

div.tree tree-node>div>.node-wrapper>.node-content-wrapper {
    margin-left: 4px
}

div.tree tree-node>div.tree-node-leaf>.node-wrapper {
    margin-left: 0
}

div.tree tree-node>div::before {
    content: "";
    position: absolute;
    border-bottom: 1px dotted #23527c;
    width: 7px;
    margin-top: 12px;
    left: 7px
}

div.tree tree-node>div .toggle-children-wrapper {
    width: 13px;
    height: 13px;
    border: 1px solid #23527c;
    position: absolute;
    left: 15px;
    margin-top: 5px;
    margin-left: 0;
    display: inline-block;
    background-color: #fff;
    z-index: 1
}

div.tree tree-node>div .toggle-children-wrapper::before {
    content: "";
    display: inline-block;
    width: 7px;
    border-top: 1px solid #23527c;
    position: absolute;
    top: 5px;
    left: 2px
}

div.tree tree-node>div .toggle-children-wrapper.toggle-children-wrapper-collapsed::after {
    content: "";
    display: inline-block;
    height: 7px;
    border-left: 1px solid #23527c;
    position: absolute;
    top: 2px;
    left: 5px
}

div.tree tree-node>div .toggle-children-wrapper .toggle-children {
    display: none
}

div.tree tree-node>div .node-content-wrapper {
    margin-left: 4px
}

div.tree>tree-node>div::before {
    left: 14px
}

div.tree>tree-node>div>.node-wrapper>tree-node-expander>.toggle-children-wrapper {
    left: 22px
}
`;
    }
};
StylingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-styling',
        template: _raw_loader_styling_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_styling_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], StylingComponent);



/***/ }),

/***/ "x7Jv":
/*!***********************************************************!*\
  !*** ./projects/docs-app/src/environments/environment.ts ***!
  \***********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "z0PY":
/*!***********************************************************************!*\
  !*** ./projects/docs-app/src/app/custom-elements/element-registry.ts ***!
  \***********************************************************************/
/*! exports provided: ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES, ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN, ELEMENT_MODULE_LOAD_CALLBACKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES", function() { return ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN", function() { return ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_MODULE_LOAD_CALLBACKS", function() { return ELEMENT_MODULE_LOAD_CALLBACKS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

// Modules containing custom elements must be set up as lazy-loaded routes (loadChildren)
// TODO(andrewjs): This is a hack, Angular should have first-class support for preparing a module
// that contains custom elements.
const ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES = [
    {
        selector: 'code-example',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./code/code-example.module */ "DW/B")).then(m => m.CodeExampleModule)
    },
    {
        selector: 'code-tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | code-code-tabs-module */ "code-code-tabs-module").then(__webpack_require__.bind(null, /*! ./code/code-tabs.module */ "Tvj4")).then(m => m.CodeTabsModule)
    },
];
/** Injection token to provide the element path modules. */
const ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('aio/elements-map');
/** Map of possible custom element selectors to their lazy-loadable module paths. */
const ELEMENT_MODULE_LOAD_CALLBACKS = new Map();
ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES.forEach(route => {
    ELEMENT_MODULE_LOAD_CALLBACKS.set(route.selector, route.loadChildren);
});


/***/ }),

/***/ "zYED":
/*!*********************************************************************************!*\
  !*** ./projects/docs-app/src/app/guides/filter-guide/filter-guide.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FilterGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterGuideComponent", function() { return FilterGuideComponent; });
/* harmony import */ var _raw_loader_filter_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./filter-guide.component.html */ "G0n/");
/* harmony import */ var _filter_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-guide.component.scss */ "uvPO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FilterGuideComponent = class FilterGuideComponent {
    constructor() {
        this.functionFilter = `
tree.treeModel.filterNodes((node) => {
  return !node.data.name.startsWith(text);
});
`;
    }
};
FilterGuideComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-filter-guide',
        template: _raw_loader_filter_guide_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_filter_guide_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], FilterGuideComponent);



/***/ }),

/***/ "zbqq":
/*!***************************************************************************!*\
  !*** ./projects/docs-app/src/app/fundamentals/issues/issues.component.ts ***!
  \***************************************************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var _raw_loader_issues_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./issues.component.html */ "A/o4");
/* harmony import */ var _issues_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./issues.component.scss */ "A4gN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let IssuesComponent = class IssuesComponent {
};
IssuesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-issues',
        template: _raw_loader_issues_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_issues_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], IssuesComponent);



/***/ }),

/***/ "zjWo":
/*!*************************************************************************************!*\
  !*** ./projects/docs-app/src/app/examples/crud-example/crud-example.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnVkLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zqmm":
/*!**********************************************************************************!*\
  !*** ./projects/docs-app/src/app/custom-elements/code/code-example.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CodeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExampleComponent", function() { return CodeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.component */ "Ayrf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable component-selector */


/**
 * An embeddable code block that displays nicely formatted code.
 * Example usage:
 *
 * ```
 * <code-example language="ts" linenums="2" class="special" header="Do Stuff">
 * // a code block
 * console.log('do stuff');
 * </code-example>
 * ```
 */
let CodeExampleComponent = class CodeExampleComponent {
    constructor() {
        this._path = '';
        this.isAvoid = false;
    }
    set header(header) {
        this._header = header;
        this.classes = {
            'headed-code': !!this.header,
            'simple-code': !this.header,
        };
    }
    get header() { return this._header; }
    set path(path) {
        this._path = path;
        this.isAvoid = this.path.indexOf('.avoid.') !== -1;
    }
    get path() { return this._path; }
    set hidecopy(hidecopy) {
        // Coerce the boolean value.
        this._hidecopy = hidecopy != null && `${hidecopy}` !== 'false';
    }
    get hidecopy() { return this._hidecopy; }
    set hyphenatedHideCopy(hidecopy) {
        this.hidecopy = hidecopy;
    }
    set capitalizedHideCopy(hidecopy) {
        this.hidecopy = hidecopy;
    }
    ngAfterViewInit() {
        this.aioCode.code = this.content.nativeElement.innerHTML;
    }
};
CodeExampleComponent.propDecorators = {
    language: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    linenums: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    region: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hidecopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hyphenatedHideCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hide-copy',] }],
    capitalizedHideCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hideCopy',] }],
    isAvoid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.avoidFile',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content', { static: true },] }],
    aioCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_code_component__WEBPACK_IMPORTED_MODULE_1__["CodeComponent"], { static: true },] }]
};
CodeExampleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'code-example',
        template: `
    <!-- Content projection is used to get the content HTML provided to this component -->
    <div #content style="display: none"><ng-content></ng-content></div>
    <header *ngIf="header">{{header}}</header>
    <aio-code [ngClass]="classes"
              [language]="language"
              [linenums]="linenums"
              [path]="path"
              [region]="region"
              [hideCopy]="hidecopy"
              [header]="header">
    </aio-code>
  `,
    })
], CodeExampleComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map