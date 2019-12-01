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
    if sys.argv[0].startswith('sjva.py'):
        try:
            if platform.system() != 'Windows':
                custom = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'custom')    
                os.system("chmod 777 -R %s" % custom)
                custom = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'bin')    
                os.system("chmod 777 -R %s" % custom)
        except:
            pass
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
        
