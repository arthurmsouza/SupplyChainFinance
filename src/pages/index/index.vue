<template>
    <div class="">
        <headerNormal></headerNormal>
        <div class="row text-center">
            <img src="@/assets/img/banner.png">
        </div>
        <div class="mauto mt40 w920">
            <div class="title1 tc">交易数据
                <p></p>
            </div>
            <div class="title2 mt30">最近成交</div>
            <table class="table dataTable mt15 text-center">
                <thead>
                    <tr>
                        <th>成交日期</th>
                        <th>核心企业</th>
                        <th>融资方</th>
                        <th>融资类型</th>
                        <th>融资金额</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2018/3/16</td>
                        <td>坚果科技</td>
                        <td>锤子科技</td>
                        <td>天使轮融资</td>
                        <td>
                            <span class="text-yellow">300.000,000元</span>
                        </td>
                    </tr>
                    <tr>
                        <td>2018/3/16</td>
                        <td>坚果科技</td>
                        <td>锤子科技</td>
                        <td>天使轮融资</td>
                        <td>
                            <span class="text-yellow">300.000,000元</span>
                        </td>
                    </tr>
                    <tr>
                        <td>2018/3/16</td>
                        <td>坚果科技</td>
                        <td>锤子科技</td>
                        <td>天使轮融资</td>
                        <td>
                            <span class="text-yellow">300.000,000元</span>
                        </td>
                    </tr>
                    <tr>
                        <td>2018/3/16</td>
                        <td>坚果科技</td>
                        <td>锤子科技</td>
                        <td>天使轮融资</td>
                        <td>
                            <span class="text-yellow">300.000,000元</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="grayBg2 pdt50 pdb70">
            <div class="title1 tc">供应链融资的优势
                <p></p>
            </div>
            <div class="mauto mt40 w920 tc">
                <img src="@/assets/img/exhibition.png">
            </div>
        </div>
        <TPfooter></TPfooter>
    </div>
</template>
<script>
import headerIndex from '@/components/index/header_index';
import TPfooter from '@/components/index/footer';
export default {
	name: 'index',
	data() {
		return {
			msg: '欢迎来到潞盈',
		};
	},
	components: {
		headerIndex,
		TPfooter,
	},
};
</script>
<style>
</style>

