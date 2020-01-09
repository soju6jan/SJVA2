# -*- coding: utf-8 -*-
#########################################################
import os
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import platform

try:
    from gevent import monkey;monkey.patch_all()
except:
    print('not monkey')


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
            print('Exception:%s', e)


        server_plugin_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'custom')
        #change_plugin = ['manamoa_sjva', 'syno_index_sjva', 'launcher_xteve_sjva', 'launcher_calibre_web', 'launcher_gateone_sjva', 'launcher_greentunnel_sjva', 'launcher_guacamole_sjva', 'launcher_tautulli_sjva', 'launcher_torrssen2_sjva']
        tmp2 = os.path.listdir(server_plugin_path)
        print('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ')
        print(tmp2)
        for t in tmp2:
            try:
                if not t.endswith('_sjva'):
                    continue
                tmp = os.path.join(server_plugin_path, t)
                print('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

                print(tmp)
                if os.path.exists(tmp):
                    os.rename(tmp, tmp.replace('_sjva', ''))
                    #shutil.move(tmp, tmp.replace('_sjva', 'sjva'))
            except Exception as e:
                logger.error('Exception:%s', e)
                logger.error(traceback.format_exc())


except Exception, e:
    print('Exception:%s', e)



import framework
import system
   
app = framework.app
#huey = framework.huey
celery = framework.celery

def start_app():
    for i in range(10):
        try:
            framework.socketio.run(app, host='0.0.0.0', port=app.config['config']['port'])
            print('EXIT CODE : %s' % framework.exit_code)
            if framework.exit_code != -1:
                sys.exit(framework.exit_code)
                break
            else:
                print('framework.exit_code is -1')
            break
        except Exception as e:
            print(str(e))
            import time
            time.sleep(10*i)
            continue
        except KeyboardInterrupt:
            print('KeyboardInterrupt !!')
    print('start_app() end')

if __name__ == '__main__':
    try:
        start_app()
    except Exception as e:
        print(str(e))
        
