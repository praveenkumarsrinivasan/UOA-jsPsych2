

/*
 *
 * questionaire Task - Experiment
 *
 */

var thanks_task_exp = function(appModel) {

    //define blocks of the experiment
    var exp_name_block = {
        type: "text",
        text: appModel.attributes.thanks_task,
        cont_key: "mouse"
    }
    
    //blocks in the experiment
    var experiment_blocks = [];
    experiment_blocks.push(exp_name_block);

    jsPsych.init({
        display_element: $('#exp_target'),
        experiment_structure: experiment_blocks,
        on_finish: function() {
            psiturk.saveData({
                success: function() {
                    psiturk.completeHIT();
                },
                error: function() {
                }
            });
        },
        on_data_update: function(data) {
            psiturk.recordTrialData(data);
        }
    });

};
