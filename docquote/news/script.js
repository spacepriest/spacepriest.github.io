var my_news = [
{
  author: 'Doc Orion',
  text: 'Testing out',
  bigText: 'hey testing out the new news for keepers of the egg, this is where we can meet and post somebullshit and what not .' },

{
  author: 'Doc Orion',
  text: 'LETS USE THIS FOR FUN',
  bigText: 'I stole this from russia' },

{
  author: 'Doc Orion',
  text: 'POST HERE',
  bigText: 'POST ALL YOU WANT HERE' }];



window.ee = new EventEmitter();

var Article = React.createClass({ displayName: "Article",
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired }) },


  getInitialState: function () {
    return {
      visible: false };

  },
  readMoreClick: function (event) {
    event.preventDefault;
    this.setState({
      visible: !this.state.visible });

  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "article" }, /*#__PURE__*/
      React.createElement("p", { className: "item-author" }, this.props.data.author, " "), /*#__PURE__*/
      React.createElement("div", { className: "item-text" }, this.props.data.text, /*#__PURE__*/
      React.createElement("p", { className: "item-big-text " + (this.state.visible ? '' : 'none') }, this.props.data.bigText)), /*#__PURE__*/

      React.createElement("a", { href: "#",
        onClick: this.readMoreClick,
        className: "news-more " + (this.state.visible ? 'none' : '') }, "Read more..")));




  } });

var News = React.createClass({ displayName: "News",
  propTypes: {
    data: React.PropTypes.array.isRequired },

  getInitialState: function () {
    return {
      counter: 0 };

  },
  render: function () {
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function (item, index) {
        return /*#__PURE__*/(
          React.createElement("div", { key: index }, /*#__PURE__*/
          React.createElement(Article, { data: item })));


      });
    } else {
      newsTemplate = "Unfortunately no news:(";
    }

    return /*#__PURE__*/(
      React.createElement("div", { className: "news" },
      newsTemplate, /*#__PURE__*/
      React.createElement("strong", { className: data.length > 0 ? '' : "none" }, " News count: ", data.length)));


  } });


var Add = React.createClass({ displayName: "Add",
  getInitialState: function () {
    return {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true };

  },
  componentDidMount: function () {
    this.refs.author.focus();
  },
  handlerClick: function (event) {
    event.preventDefault();
    var textEl = this.refs.text;
    var author = this.refs.author.value;
    var text = this.refs.text.value;

    var item = [{
      author: author,
      text: text,
      bigText: '...' }];


    window.ee.emit('News.add', item);

    textEl.value = '';
    this.setState({ textIsEmpty: true });
  },
  onAuthorChange: function (event) {
    if (event.target.value.trim() > 0) {
      this.setState({
        authorIsEmpty: false });
    } else {
      this.setState({
        authorIsEmpty: true });

    }
  },
  onTextChange: function (event) {
    if (event.target.value.trim() > 0) {
      this.setState({
        textIsEmpty: false });
    } else {
      this.setState({
        textIsEmpty: true });

    }
  },
  onCheckRuleClick: function (event) {
    this.setState({
      agreeNotChecked: !this.state.agreeNotChecked });

  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "form-wrapper " }, /*#__PURE__*/
      React.createElement("form", { className: "add cf" }, /*#__PURE__*/
      React.createElement("input", {
        type: "text",
        ref: "author",
        placeholder: "Your Name",
        className: "add-author",
        onChange: this.onAuthorChange }), /*#__PURE__*/

      React.createElement("textarea", {
        className: "add-text",
        placeholder: "News text",
        ref: "text",
        rows: "5",
        onChange: this.onTextChange }), /*#__PURE__*/

      React.createElement("label", { className: "add-checkrule" }, /*#__PURE__*/
      React.createElement("input", { type: "checkbox",
        ref: "checkrul",
        onChange: this.onCheckRuleClick }), "I agree with the rules"), /*#__PURE__*/



      React.createElement("button", {
        className: "add-btn",
        onClick: this.handlerClick,
        ref: "alert_button",
        disabled: this.state.agreeNotChecked || this.state.onAuthorChange || this.state.onTextChange }, "Add news"))));





  } });


var App = React.createClass({ displayName: "App",
  getInitialState: function () {
    return {
      news: my_news };

  },
  componentDidMount: function () {
    var self = this;
    window.ee.addListener('News.add', function (item) {
      var nextNews = item.concat(self.state.news);
      self.setState({
        news: nextNews });

    });
  },
  componentWillUnmount: function () {
    window.ee.removeListener('News.add');
  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "app" }, /*#__PURE__*/
      React.createElement(Add, null), /*#__PURE__*/
      React.createElement("h3", null, "NEWS!"), /*#__PURE__*/
      React.createElement(News, { data: this.state.news })));


  } });



ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById('root'));