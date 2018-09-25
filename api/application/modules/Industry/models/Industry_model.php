<?php

class Industry_model extends CI_Model
 {

	public function add_Industry($post_Industry) {
		
		if($post_Industry) {
			
			if($post_Industry['IsActive']==1)
			{
				$IsActive = true;
			} else {
				$IsActive = false;
			}
			$Industry_data = array(
				"IndustryId"=>trim($post_Industry['IndustryId']),
				'IndustryName' => trim($post_Industry['IndustryName']),
				"IsActive"=>$IsActive,
				"CreatedBy" =>1,
				"UpdatedBy" =>1
			
			);
			
			$res = $this->db->insert('tblmstindustry',$Industry_data);
			
			if($res) {
				
				return true;
			} else {
				return false;
			}
	
		} else {
			return false;
		}
	}
	
	public function getlist_Industry() {
	
		$this->db->select('*');
			$this->db->order_by('IndustryName','asc');
			$result = $this->db->get('tblmstindustry');

			$res=array();
			if($result->result())
			{
				$res=$result->result();
			}
			return $res;
		
	}
	
	
	public function get_Industrydata($Industry_Id = NULL)
	{
		
		if($Industry_Id) {
			
			$this->db->select('*');
			$this->db->where('IndustryId',$Industry_Id);
			$result = $this->db->get('tblmstindustry');
			
			foreach($result->result() as $row) {
				$Industry_data = $row;
			}
			return $Industry_data;
			
		} else {
			return false;
		}
	}
	
	
	public function edit_Industry($post_Industry) {
	
		if($post_Industry) {
			 if($post_Industry['IsActive']==1)
					{
						$IsActive = true;
					} else {
						$IsActive = false;
					}
			$Industry_data = array(
				'IndustryName' => trim($post_Industry['IndustryName']),
				"IsActive"=>$IsActive,
				"UpdatedBy" =>1,
				'UpdatedOn' => date('y-m-d H:i:s')
			
			);
			
			$this->db->where('IndustryId',$post_Industry['IndustryId']);
			$res = $this->db->update('tblmstindustry',$Industry_data);
			
			if($res) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}	
	
	}
	
	
	public function delete_Industry($post_Industry) {
	
		if($post_Industry) {
			
			$this->db->where('IndustryId',$post_Industry['id']);
			$res = $this->db->delete('tblmstindustry');
			
			if($res) {
				$log_data = array(
					'UserId' => trim($post_Industry['Userid']),
					'Module' => 'Industry',
					'Activity' =>'Delete'

				);
				$log = $this->db->insert('tblactivitylog',$log_data);
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
		
	}
	
}
