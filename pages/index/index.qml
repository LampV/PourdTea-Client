<creative wx:if="{{curIcon=='creative'}}"></creative>
<form wx:if="{{curIcon=='form'}}"></form>
<my wx:if="{{curIcon=='my'}}"></my>

<view class="container">
  <view class="cu-bar tabbar bg-white shadow foot">
    <view class="cuIcon-cu-image action" wx:for="{{iconArray}}" wx:for-item="icon" wx:key="{{icon}}">
      <view class="cuIcon-{{icon}}{{curIcon==icon?'fill':''}}" data-icon="{{icon}}" bindtap="barIconTap"></view>
    </view>
  </view>
</view>
