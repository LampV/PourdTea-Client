<view class="container">
    <swiper class="poem-container" current-item-id="{{currentItemId}}">
        <swiper-item item-id="poem_content">
            <scroll-view scroll-y class="poem-scroll">
                <view class="poem-title">
                    {{poem.title}}
                </view>
                <view class="poem-author color-orange" bindtap="swipeToAuthor">
                    <view class="poem-author-dynasty">
                        [{{poem.author_dynasty}}]
                    </view>
                    <view class="poem-author-name">
                        {{poem.author_name}}
                    </view>
                </view>
                <view class="poem-text" wx:for="{{poem.sentences}}" wx:for-item="sentence" wx:key="{{sentence}}">
                    {{sentence}}
                </view>
            </scroll-view>
        </swiper-item>
        <swiper-item item-id="poem_author">
            <scroll-view scroll-y class="poem-scroll">
                <view class="author-author color-orange">
                    <view class="author-author-name">
                        {{poem.author_name}}
                    </view>
                    <view class="author-author-point">
                        ·
                    </view>
                    <view class="author-author-dynasty">
                        {{poem.author_dynasty}}
                    </view>
                </view>
                <view class="author-author-abstract color-grey" wx:for="{{poem.author_abstract_parags}}" wx:for-item="parag" wx:key="{{parag}}">
                    {{parag}}
                </view>
            </scroll-view>
        </swiper-item>
    </swiper> 
</view>
