echo 'Building static'
cd shopping-web
yarn build
cd ..

echo 'Coping static'
rm -r shopping-server/static
mv shopping-web/dist shopping-server/static

echo 'Pushing changes to git'
git add -A
git commit -m 'Yet another release'
git push origin master

echo 'Now go and deploy.'
open https://www.pythonanywhere.com/user/zymud/webapps/#tab_id_zymud_pythonanywhere_com
open https://www.pythonanywhere.com/user/zymud/consoles/12746175/
