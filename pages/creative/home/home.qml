<scroll-view class="creative-scrollview">
    <view class="poems-container">
        <view wx:for="{{poem_list}}" wx:for-item="poem" wx:key="{{poem}}" class="poem-container">
            <view class="poem-title"> {{poem.title}} </view>
            <view class="poem-author-info">
                <view class="poem-author-dynasty"> {{poem.dynasty}} </view>
                <view class="poem-author-sep">/</view>
                <view class="poem-author-name"> {{poem.author}} </view>
            </view>
            <view class="poem-abstract"> {{poem.abstract}} </view>
        </view>
    </view>
    <view class="cu-tabbar-height"></view>
</scroll-view>
