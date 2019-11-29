# -*- coding: utf-8 -*-
#########################################################
import os
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))

try:
    from gevent import monkey;monkey.patch_all()
except:
    print 'not monkey'


######################################
# docker_start.sh 에 site.db로 되어 있어 migration 안되고 있음
try:
    import os
    site_db = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'db', 'site.db')
    
    print site_db
    if not os.path.exists(site_db):
        print 'site.db file not exist!!'
        f = open(site_db, 'w')
        f.close()
        sys.exit("1")
    else:
        print 'site.db file exist!!'

    if sys.argv[0].startswith('sjva.py'):
        tmp = '/app/bin/Linux'
        if os.path.exists(tmp):
            for t in os.listdir(tmp):
                os.chmod(os.path.join(tmp, t), 0755)
                print 'CHMOD : %s' % t
            #os.system("apk add chromium chromium-chromedriver fuse")
            os.system("apk add fuse")
        try:
            if platform.system() != 'Windows':
                custom = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'custom')    
                os.system("chmod 777 -R %s" % custom)
        except:
            pass
    try:
        import os
        syno = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'plugin', 'synoindex')
        if os.path.exists(syno):
            import shutil
            shutil.rmtree(syno)
    except Exception as e:
        logger.error('Exception:%s', e)
        logger.error(traceback.format_exc()) 

    """
    try:
        import os
        epg_source_db = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'etc', 'epg.db')
        epg_target_db = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'db', 'epg.db')
        if os.path.exists(epg_source_db):
            if os.path.exists(epg_target_db):
                os.remove(epg_target_db)
            import shutil
            shutil.move(epg_source_db, epg_target_db)
                
    except Exception as e:
        logger.error('Exception:%s', e)
        logger.error(traceback.format_exc()) 
    """
except Exception, e:
    print('Exception:%s', e)



import framework
import system
   
app = framework.app
huey = framework.huey

def start_app():
    for i in range(10):
        try:
            framework.socketio.run(app, host='0.0.0.0', port=app.config['config']['port'])
            print 'EXIT CODE : %s' % framework.exit_code
            if framework.exit_code != -1:
                sys.exit(framework.exit_code)
                break
            else:
                print 'framework.exit_code is -1'
            break
        except Exception as e:
            print e
            import time
            time.sleep(10*i)
            continue
        except KeyboardInterrupt:
            print 'KeyboardInterrupt !!'
    print 'start_app() end'

if __name__ == '__main__':
    try:
        start_app()
    except Exception as e:
        print e
        
