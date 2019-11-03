<view class="poem-row-container" data-poemid="{{poem.id}}" bindtap="navToPoem">
    <view class="poem-row-icon__like-container" data-poemid="{{poem.id}}" catchtap="poemLike">
        <view class="cuIcon-like{{like ? 'fill' : ''}} poem-row-icon__like" > </view>
    </view>
    <view class="poem-row-title"> {{poem.title}} </view>
    <view class="poem-row-author-info">
        <view class="poem-row-author-dynasty"> {{poem.dynasty}} </view>
        <view class="poem-row-author-sep">/</view>
        <view class="poem-row-author-name"> {{poem.author}} </view>
    </view>
    <view class="poem-row-abstract"> {{poem.abstract}} </view>
</view>
