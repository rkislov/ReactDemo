﻿var CommentBox = React.createClass({ 
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommetForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} key={comment.Id}>
                    {comment.Text}
                </Comment>
                );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
            );
    }
});

var Comment = React.createClass({
    rawMarkup: function () {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
            );
    }
});

var CommetForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world! I'm a commentForm.
            </div>
            );
    }
});

var data = [
    { Id: 1, Author: "Daniel Lo Nigro", Text: "Hello ReactJS.NET World!" },
    { Id: 2, Author: "Pete Hunt", Text: "This is one comment" },
    { Id: 3, Author: "Jordan Walke", Text: "This is *another* comment" }
];

ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);