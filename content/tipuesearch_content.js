var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'week1~5 \n week6-9 \n week10~14 \n week15~18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'week1~5', 'text': 'Week1 \n 建立個人倉儲及編輯網站 \n 1. 登入自己的github帳號，創建新的倉儲cd2020 2.輸入 git clone \xa0 https://github.com/s40723218/cd2020 \xa0複製 個人倉儲至資料夾 3.輸入git submodule add https://github.com/mdecourse/cmsimde.git 取得子模組資料。 4.將up_dir的所有項目複 製到cd2020裡面 5.完成後，python wsgi.py 開始編輯個人網站 6.編輯完成後即可git status \xa0 > \xa0 git add . \xa0 > \xa0 git commit -m "\xa0 \xa0 " \xa0\xa0 > \xa0 git push\xa0 \xa0 \n \n Week2 \n 將可攜系統的 python3.7.3更新至 python3.8.2 版本 \n 1.在cd2020裡面新增一個data資料夾，然後在data裡面新增資料夾py382及wscite432、portablegit。 \n 2..進入 Python 官網。 點Downloads下的 Windows ，並選 Latest Python 3 Release - Python 3.8.2 。 \n 3.下載 Windows x86-64 executable installer 。 \n 4.把pip選項取消，接著案next到py382 \n 5.下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432 \n 6.建立新的start.bat及stop.bat。 \n 7.下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 \n 8.下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至portablegit下。 \n 9.安裝到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 \n 10開啟start.bat 輸入指令 python get - pip.py以及pip install flask bs4 lxml pelican markdown flask_cors leo 就完成了 \n 第三組第一次會議 \n 會議流程:  \n 1.直播會議，組員簽到 \n 2.組員分配工作 \n 3.問題提問 \n 作業一: 1.請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ 2.描述如何為Windows 10 64位系統準備一個可移植的Python編程系統，以允許在Github上維護CMSiMDE網站，Pelican博客和js演示文稿？ 3.您需要從 http://www.coppeliarobotics.com/helpFiles/index.html 了解什麼來實現四輪機器人？ \n 工作分配表: \n \n 會議影片: \n \n Week3 \n 請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ \n 1.去網站  http://mde.tw/cd2020/content/Grouping.html \n 2.點  Dart source code for random grouping \n 3.去HTML更改為我們班的路徑 \n 4.點Run即完成亂數分組. \n 完成圖 \n \n 操作影片 \n \n', 'tags': '', 'url': 'week1~5.html'}, {'title': 'week6~9', 'text': '\xa0 Week6 \n Topic 1: Mechanical Design Process 翻譯 (負責章節4.1~4.5) \n Chapter 4 Materials and\xa0Processes \n 第三組第二次會議 \n 作業二: \n \n 根據主題0和主題1的素材，您能否具體描述機械設計團隊為了完成作業1的四輪機器人需要做些什麼? \n 您需要從 https://cyberbotics.com/doc/guide/index 了解什麼來實現四輪機器人？ \n \n 工作分配表: \n \n 會議影片: \n \n', 'tags': '', 'url': 'week6~9.html'}, {'title': 'week10~14', 'text': '', 'tags': '', 'url': 'week10~14.html'}, {'title': 'week15~18', 'text': '\n', 'tags': '', 'url': 'week15~18.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};