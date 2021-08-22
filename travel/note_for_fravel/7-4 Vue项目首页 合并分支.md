git checkout index-swiper.git
...coding...coding
git add .
git commmit -m "change"
git push
# 切换到本地master
git checkout master
# 合并远程 index-swiper 到 本地 master分支
git merge gitee_vue/index-swiper
# 提交主分支
git push
