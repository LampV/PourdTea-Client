<view class="container">
  <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="usermotto">
    <text class="user-motto">This is page {{curIcon}}</text>
  </view>

  <view class="cu-bar tabbar bg-white shadow foot">
    <view class="cuIcon-cu-image action" wx:for="{{iconArray}}" wx:for-item="icon" wx:key="{{icon}}">
      <view class="cuIcon-{{icon}}{{curIcon==icon?'fill':''}}" data-icon="{{icon}}" bindtap="barIconTap"></view>
    </view>
  </view>
</view>
