import Nerv from "nervjs";
import { Component } from "@tarojs/taro-h5";
import { View, Image } from "@tarojs/components";
import "./classify.less";
import { AtTabs, AtTabsPane } from 'taro-ui';
// import "~taro-ui/dist/style/components/flex.scss";
import Title from "../img/title.jpg";
// import list1 from "../img//list (1).png";
export default class Classify extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      current: 0,
      tabList: [{ title: '推荐专区' }, { title: '夏凉专区' }, { title: '爆品专区' }, { title: '居家生活' }, { title: '服饰鞋包' }, { title: '美食酒水' }, { title: '个护清洁' }],
      productList: [{ name: '清爽美食' }, { name: '降温好物' }, { name: '烈日防晒' }, { name: '夏季养生' }, { name: '防蚊驱虫' }, { name: '夏凉床品' }, { name: '清凉洗护' }, { name: '夏日穿搭' }, { name: '室内运动好物' }]
    };
  }
  handleClick(data) {
    this.setState({
      current: data
    });
  }
  //监听程序初始化，初始化完成时触发（全局触发一次）
  componentWillMount() {}
  //监听程序初始化，初始化完成时触发（全局触发一次）
  componentDidMount() {}
  //当组件从Dom中移除时触发
  componentWillUnmount() {}
  //程序运行或后台进去前台时触发
  componentDidShow() {}
  //前台进入后台时触发
  componentDidHide() {}
  render() {
    return <View className="classify">
                <AtTabs current={this.state.current} height="600px" scroll tabDirection="vertical" font-size="14px" tabList={this.state.tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane tabDirection="vertical" current={this.state.current} index={0}>
                        <View style="font-size:14px;text-align:center;">
                            <View className="titie">
                                <Image className="logoImg" src={Title} />
                            </View>
                            <View className="proList">
                                 {this.state.productList.map((item, index) => <View key={index} className="proItem">
                                        <Image className="proImg" src={require('../img/list (1).png')} />
                                        <View>{item.name}</View>
                                     </View>)}
                            </View>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection="vertical" current={this.state.current} index={0}>
                        <View style="font-size:14px;text-align:center;">
                            <View className="titie">
                                <Image className="logoImg" src={Title} />
                            </View>
                            <View className="proList">
                                 {this.state.productList.map((item, index) => <View key={index} className="proItem">
                                        <Image className="proImg" src={require('../img/list (2).png')} />
                                        <View>{item.name}</View>
                                     </View>)}
                            </View>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection="vertical" current={this.state.current} index={0}>
                        <View style="font-size:14px;text-align:center;">
                            <View className="titie">
                                <Image className="logoImg" src={Title} />
                            </View>
                            <View className="proList">
                                 {this.state.productList.map((item, index) => <View key={index} className="proItem">
                                        <Image className="proImg" src={require('../img/list (3).png')} />
                                        <View>{item.name}</View>
                                     </View>)}
                            </View>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection="vertical" current={this.state.current} index={0}>
                        <View style="font-size:14px;text-align:center;">
                            <View className="titie">
                                <Image className="logoImg" src={Title} />
                            </View>
                            <View className="proList">
                                 {this.state.productList.map((item, index) => <View key={index} className="proItem">
                                        <Image className="proImg" src={require('../img/list (4).png')} />
                                        <View>{item.name}</View>
                                     </View>)}
                            </View>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection="vertical" current={this.state.current} index={0}>
                        <View style="font-size:14px;text-align:center;">
                            <View className="titie">
                                <Image className="logoImg" src={Title} />
                            </View>
                            <View className="proList">
                                 {this.state.productList.map((item, index) => <View key={index} className="proItem">
                                        <Image className="proImg" src={require('../img/list (5).png')} />
                                        <View>{item.name}</View>
                                     </View>)}
                            </View>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection="vertical" current={this.state.current} index={0}>
                        <View style="font-size:14px;text-align:center;">
                            <View className="titie">
                                <Image className="logoImg" src={Title} />
                            </View>
                            <View className="proList">
                                 {this.state.productList.map((item, index) => <View key={index} className="proItem">
                                        <Image className="proImg" src={require('../img/list (6).png')} />
                                        <View>{item.name}</View>
                                     </View>)}
                            </View>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection="vertical" current={this.state.current} index={0}>
                        <View style="font-size:14px;text-align:center;">
                            <View className="titie">
                                <Image className="logoImg" src={Title} />
                            </View>
                            <View className="proList">
                                 {this.state.productList.map((item, index) => <View key={index} className="proItem">
                                        <Image className="proImg" src={require('../img/list (7).png')} />
                                        <View>{item.name}</View>
                                     </View>)}
                            </View>
                        </View>
                    </AtTabsPane>
                </AtTabs>
            </View>;
  }
  config = {
    navigationBarTitleText: '分类'
  };
}