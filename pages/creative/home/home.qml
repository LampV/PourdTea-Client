<scroll-view class="creative-scrollview">
    <view class="poems-container">
        <block wx:for="{{poem_list}}" wx:for-item="poem" wx:key="{{poem}}">
            <poem-row poem="{{poem}}"></poem-row>
        </block>
    </view>
    <view class="cu-tabbar-height"></view>
</scroll-view>
