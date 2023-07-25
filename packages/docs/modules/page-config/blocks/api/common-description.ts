export default
{
  events: {
    validation: "On internal validation.",
    blur: "On blur.",
    focus: "On focus.",
    input: "On value change.",
    click: "On click.",
    clickPrepend: "The event is triggered by clicking on the `prepend` slot",
    clickPrependInner: "The event is triggered by clicking on the `prependInner` slot",
    clickAppend: "The event is triggered by clicking on the `append` slot",
    clickAppendInner: "The event is triggered by clicking on the `appendInner` slot",
    updateModelValue: "The event is triggered when the component needs to change the model. Is also used by `v-model`",
    updateFocused: "The event is triggered when the component needs to toggle the focus",
    eventArgument: "The event argument is:"
  },
  props: {
    align: "Customizes horizontal position of component (flex based). Available values are strings: 'left', 'center', 'right', 'between', 'around', 'stretch'.",
    id: "Applies `id` to internal input component. Useful for native forms.",
    name: "Applies `name` to internal input component. Useful for native forms.",
    tag: "Replaces html tag. This is useful for semantics and also to allow for valid markup in some cases (`ul > li` and `tr > td` etc.).",
    size: "Specify size for component. `\"small\"`, `\"medium\"`, `\"large\"` sizes are available. If you want more control, you can provide number (will be used as `px`) or string value (`rem` and `px` sizes are supported).",
    sizesConfig: "Provide a set of sizes as a global component specific setting.",
    fontSizesConfig: "Provide a set of sizes for fonts as a global component specific setting.",
    disabled: "Applies `disabled` style and removes all user interaction effects.",
    readonly: "Doesn't look disabled, but acts like one. Mostly useful for wrapper components.",
    success: "Show component in success state.",
    error: "Show component in error state.",
    messages: "Description messages for the component.",
    errorMessages: "Error messages for the component.",
    errorCount: "Number of error messages displayed.",
    stateful: "Add possibility to work with component without setting `v-model`.",
    color: "Color of the component (theme string or `HEX` string).",
    textColor: "Text color (theme string or HEX string).",
    rules: "Validation rules <!-- TODO Add link -->.",
    to: "The target route of the link. [More info here](https://router.vuejs.org/api/#to \"Vue router docs\")[[target=_blank]].",
    replace: "When set, calls `router.replace()` instead of `router.push()` when navigated, so it will not leave a history record. [More info here](https://router.vuejs.org/api/#replace \"Vue router docs\")[[target=_blank]].",
    append: "When set, always appends the relative path to the current path. [More info here](https://router.vuejs.org/api/#append \"Vue router docs\")[[target=_blank]].",
    exact: "Exactly match the link. Without this, '/' will match every route. [More info here](https://router.vuejs.org/api/#exact \"Vue router docs\")[[target=_blank]].",
    activeClass: "Applied when the link is active. [More info here](https://router.vuejs.org/api/#active-class \"Vue router docs\")[[target=_blank]].",
    exactActiveClass: "Applied when the link is active with exact match. [More info here](https://router.vuejs.org/api/#exact-active-class \"Vue router docs\")[[target=_blank]].",
    href: "Designates the component as anchor and applies the href attribute. [More info here](https://router.vuejs.org/api/#href \"Vue router docs\")[[target=_blank]].",
    target: "Navigation target, [More info here](https://developer.mozilla.org/docs/Web/HTML/Element/A)[[target=_blank]].",
    src: "Source URL.",
    arrayValue: "Same as native `value`. It is used with `v-model` of an array type.",
    label: "Same as native `label`.",
    leftLabel: "Moves the label on the left of a component.",
    loading: "Indicates that something is loading (spinner icon).",
    trueValue: "Overrides the returned value when it's checked.",
    falseValue: "Overrides the returned value when it's not checked.",
    square: "Removes rounded corners.",
    indicator: "Sets the indicator style.",
    icon: "Sets an icon.",
    rounded: "Adds rounded corners.",
    flat: "Removes borders and background.",
    outline: "Removes background.",
    gradient: "Adds a background gradient.",
    modelValue: "The value of the `v-model` bindings.",
    activeButtonTextColor: "The color of the text of the active button (options supported by the theme or `HEX`).",
    indeterminate: "Same as native `indeterminate` - a state in which it's impossible to say whether the item is toggled `on` or `off`",
    indeterminateValue: "Overrides a state value that is not set.",
    borderColor: "Color CSS style `border` (theme supported options or `HEX`).",
    clearableIcon: "Sets the cleaning button icon.",
    tabindex: "Sets the custom `tabindex`.",
    preset: "Named preset combination of component props.",
    hideOnScroll: "Hides component when scrolling.",
    bottom: "Sets the component position to the bottom (`fixed` state).",
    backgroundOpacity: "Sets up button background opacity.",
    hoverBehavior: "Behavior of the button, when it's being hovered. Can be `mask` (superimposes color mask on the background or text color for plain state) or `opacity` (adds opacity to the background or text color for plain state).",
    hoverMaskColor: "Mask color for `mask` behavior.",
    hoverOpacity: "Opacity value for `opacity` behavior and mask opacity for `mask` behavior.",
    pressedBehavior: "Behavior of the button, when it's being pressed. Can be `mask` (superimposes color mask on the background or text color for plain state) or `opacity` (adds opacity to the background or text color for plain state).",
    pressedMaskColor: "Mask color for `mask` behavior.",
    pressedOpacity: "Opacity value for `opacity` behavior and mask opacity for `mask` behavior.",
    textOpacity: "Sets button text opacity.",
    iconColor: "Sets an icon color.",
    type: "Will be used as value for html `type` attribute.",
    plain: "Applies `plain` styling.",
    round: "Adds rounded corners (or make a button fully rounded if only icon is passed).",
    iconRight: "The icon to be displayed to the right of a title.",
    keyboardNavigation: "Enables keyboard navigation for the component.",
    fallbackSrc: "Shows an alternative image if original image failed to load or src doesn't specified.",
    fallbackText: "Shows an alternative text if image failed to load or src doesn't specified.",
    fallbackIcon: "Shows an icon if image failed to load or src doesn't specified.",
    fallbackRender: "Allows to use render function to render custom contents if image failed to load or src doesn't specified",
    delay: "Sets throttling delay (ms) for the components any data change (useful for huge data).",
    ratio: "Aspect ratio of the component's wrapper.",
    groupBy: "When `options` prop is an object, this key will be used to group up options. Can be string (path to the key) or function of type: `(option) => option.group`",
    grow: "Take all container width",
    immediateValidation: "Sets the validation to be performed when the component is mounted",
    anchorSelector: "Anchor CSS selector instead of passing slot",
    ariaSwitchViewLabel: "The aria-label of the \"switch view\" button",
    ariaToggleDropdownLabel: "The aria-label of the \"toggle dropdown list\" button",
    autoPlacement: "If dropdown doesn't fit viewport, it will be placed automatically to fit viewport",
    closeOnClickOutside: "Dropdown will be closed when clicked outside dropdown content and anchor",
    cursor: "Dropdown will be rendered relative to cursor position",
    isContentHoverable: "If true, dropdown content will be hoverable",
    leftIcon: "Sets the icon position to the left.",
    preventOverflow: "If true, dropdown will be teleported to target ignoring `overflow: hidden` on relative position elements.",
    requiredMark: "Adds required mark to the label",
    stickToEdges: "Dropdown will not be rendered outside of viewport. It will be moved in opposite direction.",
    ariaNextPeriodLabel: "The aria-label of the \"next period\" button",
    ariaPreviousPeriodLabel: "The aria-label of the \"previous period\" button",
    ariaRemoveFileLabel: "The aria-label of the \"remove file\" button",
    ariaResetLabel: "The aria-label of the \"reset\" button",
    background: "The color name of the backgound color",
    innerAnchorSelector: "Anchor CSS selector inside passed slot",
    cellHeight: "Height of the time cell",
    teleport: "Element where content will be rendered",
    visibleCellsCount: "Count of time cells to display",
    hidePeriodSwitch: "Hide period column",
  },
  slots: {
    scopeAvailable: "Slot scope available:"
  },
  methods: {
    
  }
}
