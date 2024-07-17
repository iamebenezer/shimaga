! function() {
    "use strict";
    var e = {
            n: function(t) {
                var n = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return e.d(n, {
                    a: n
                }), n
            },
            d: function(t, n) {
                for (var l in n) e.o(n, l) && !e.o(t, l) && Object.defineProperty(t, l, {
                    enumerable: !0,
                    get: n[l]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        },
        t = wp.blocks,
        n = wp.i18n,
        l = wp.blockEditor,
        r = wp.components,
        o = wp.serverSideRender,
        a = e.n(o),
        c = JSON.parse('{"u2":"copy-the-code/icon"}');
    (0, t.registerBlockType)(c.u2, {
        edit: function(e) {
            var t = e.attributes,
                o = e.setAttributes,
                i = (e.clientId, t.content),
                u = t.alignment;
            return wp.element.createElement(React.Fragment, null, wp.element.createElement(a(), {
                block: c.u2,
                attributes: t
            }), wp.element.createElement(l.InspectorControls, null, wp.element.createElement(r.PanelBody, {
                title: (0, n.__)("Copy Content")
            }, wp.element.createElement("p", null, (0, n.__)("The hidden content that will be copied to the clipboard.")), wp.element.createElement(r.TextareaControl, {
                value: i,
                onChange: function(e) {
                    return o({
                        content: e
                    })
                }
            })), wp.element.createElement(r.PanelBody, {
                title: (0, n.__)("Alignment")
            }, wp.element.createElement(r.SelectControl, {
                label: (0, n.__)("Horizontal Alignment"),
                value: u,
                options: [{
                    label: "Left",
                    value: "left"
                }, {
                    label: "Center",
                    value: "center"
                }, {
                    label: "Right",
                    value: "right"
                }],
                onChange: function(e) {
                    return o({
                        alignment: e
                    })
                }
            }))))
        }
    })
}();