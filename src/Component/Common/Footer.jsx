import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { getFooterList } from '../../Api/api';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: [],
			list: []
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
	}

	componentWillMount () {
		getFooterList().then(({ data }) => {
			this.setState({ title: Object.keys(data), list: data });
		});
	}

	render () {
		return (
			<footer>
				<div className="footer-top">
					<div className="wrapper clearfix">
						{
							this.state.title.map((item, i) => {
								return (
									<div className="footer-box" key={i}>
										<div className="footer-list-wrapper">
											<span className="footer-list-title">{item}</span>
										</div>
									</div>
								);
							})
						}
					</div>
				</div>
				<div className="wrapper">
					<div className="clearfix">
						{
							this.state.title.map((titleItem, i) => {
								return (
									<div className="footer-box" key={i}>
										<div className="footer-list-wrapper">
											<ul className="footer-list-content">
												{
													this.state.list[titleItem].map((listItem, j) => {
														return (
															<li key={j}>
																<a href="###">{listItem}</a>
															</li>
														);
													})
												}
											</ul>
										</div>
									</div>
								);
							})
						}
					</div>
					<div className="phone">
						<i className="phone-icon iconfont">&#xe604;</i>
						<span className="phone-title">联系电话：</span>
						<span className="phone-number">0370-88888888</span>
					</div>
					<div className="comingsoon">
						<div className="comingsoon-content">
							<span>敬请关注</span>
							<a href="http://www.sina.com.cn/" target="_blank" rel="noopener noreferrer">
								<i className="iconfont">&#xe832;</i>
							</a>
							<a href="http://weixin.qq.com/" target="_blank" rel="noopener noreferrer">
								<i className="iconfont">&#xe601;</i>
							</a>
						</div>
					</div>
					<ul className="copyright">
						<li>
							<a href="" target="_blank" rel="noopener noreferrer">
								客户关怀
							</a>
						</li>
						<li>
							<a href="" target="_blank" rel="noopener noreferrer">
								隐私政策
							</a>
						</li>
						<li>
							<a href="" target="_blank" rel="noopener noreferrer">
								豫ICP12323442号-3
							</a>
						</li>
					</ul>
				</div>
			</footer>
		);
	}
};

export default Footer;